import { clone } from 'ramda';
import chalk from 'chalk';
import stringify from 'fast-safe-stringify';

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

// * ---------------------------------------------------------------- test runner factory

type ResultHandler<T = Output, K = any> = (a: T) => K;

type TestRunnerUnity = (
  testCases: TestCases,
  solver: Function,
  config?: {
    label?: string;
    resultHandler?: ResultHandler;
  },
) => void;

const testRunnerUnity: TestRunnerUnity = (testCases, solver, config = {}) => {
  const { label = '', resultHandler = (e) => e } = config;

  const fnName = solver.name;
  const fmt = (d: any) => stringify(d);

  clone(testCases).forEach(({ input, output }, index) => {
    const inputMirror = clone(input);
    const outputMirror = clone(output);

    const rawResult = solver(...inputMirror);

    // * if return nothing, the data must be modified inplaced
    const ourResult = rawResult === undefined ? inputMirror[0] : rawResult;

    const printInputBackup = fmt(input).replace(/^\[(.*)\]$/, '$1'); // * unwrap [input]
    const printExpectResult = chalk.green(fmt(output));
    const printOurResult = chalk.yellow(fmt(ourResult));

    // * display function call detail
    const testTitle: string =
      printInputBackup.length < 120 && printOurResult.length < 40 && printExpectResult.length < 40
        ? `${label} ${index}: ${fnName}(${printInputBackup}) => ${printOurResult}; ${printExpectResult}`
        : [
            `${label} ${index}: ${fnName}(${printInputBackup})`,
            `    our: ${printOurResult}`,
            `    exp: ${printExpectResult}`,
          ].join('\n');

    test(testTitle, () => {
      expect(resultHandler(ourResult)).toEqual(resultHandler(output));
    });
  });
};

// * ------------------------------------------------ test runner utility

type TestRunner = (testCases: TestCases, solver: Function, label?: string) => void;

export const testRunner: TestRunner = (testCases, solver, label = '') =>
  testRunnerUnity(testCases, solver, { label });

export const compareBy = <O>(resultHandler: ResultHandler<O>): TestRunner => (
  testCases,
  solver,
  label = '',
) => testRunnerUnity(testCases, solver, { label, resultHandler });
