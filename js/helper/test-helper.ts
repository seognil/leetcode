import { clone } from 'ramda';

// * ---------------------------------------------------------------- testCases maker

type Input = any;
type Output = any;

type TestCase<I = Input, O = Output> = { input: I; output: O };
type TestCases<I = Input, O = Output> = TestCase<I, O>[];

type CaseMakerS = <I = Input, O = Output>(cases: TestCase<I, O>[]) => TestCases<I[], O>;
type CaseMakerM = <I = Input, O = Output>(cases: TestCase<I, O>[]) => TestCases<I, O>;

// * wrap single parameter input
export const makeTestCasesOfSingleInput: CaseMakerS = (cases) =>
  cases.map(({ input, output }) => ({ input: [input], output }));

export const makeTestCases: CaseMakerM = (cases) => cases;

// * ---------------------------------------------------------------- singleTestRunner

type TestRunner = (testCases: TestCases, solver: Function, fnName?: string) => void;

export const testRunner: TestRunner = (testCases, solver, fnName = solver.name) => {
  clone(testCases).forEach(({ input, output }, index) => {
    const inputBackup = clone(input);
    const rawResult = solver(...input);

    // * if return nothing, the data must be inplace modified
    const ourResult = rawResult === undefined ? input[0] : rawResult;

    const fmt = (d: any) => JSON.stringify(d);
    const printInputBackup = fmt(inputBackup).replace(/^\[(.*)\]$/, '$1'); // * unwrap [input]
    const printExpectResult = fmt(output);
    const printOurResult = fmt(ourResult);

    const testTitle = `${index}: ${fnName}(${printInputBackup}) => ${printOurResult};  ${printExpectResult}`;

    test(testTitle, () => {
      expect(ourResult).toEqual(output);
    });
  });
};
