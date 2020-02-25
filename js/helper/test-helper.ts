import path from 'path';
import glob from 'glob';
import { curry, clone } from 'ramda';

type Input = any[];
type Output = any;
export type TestCase<I = Input, O = Output> = {
  input: I;
  output: O;
};
export type TestCases<I = Input, O = Output> = TestCase<I, O>[];

type Path = string;

type Solver = Function;
type SolverFilePath = string;
type SolverFilePaths = SolverFilePath[];

export const wrapSingleInput = <I, O>(cases: TestCases<I, O>) =>
  cases.map(({ input, output }) => ({ input: [input], output }));

export const getProblemName = (currentPath: Path) => path.basename(currentPath);

export const makeTestTitle = curry(
  (currentPath: Path, solverName: string) => `${getProblemName(currentPath)} - ${solverName}`,
);

export const makeTestRunner = (dir: Path) => {
  const currentPath = dir;
  const problemName = path.basename(currentPath);
  const solvers = glob.sync(path.join(currentPath, '/!(*.test).{js,ts}'));
  const tsSolvers = solvers.filter((e) => e.match(/ts$/));
  const jsSolvers = solvers.filter((e) => e.match(/js$/));

  const exportOf = (dir: Path) => {
    const output = require(path.resolve(dir));
    return output.default || output;
  };

  const singleTestRunner = (testCases: TestCases, solver: Solver, fnName: string = solver.name) => {
    clone(testCases).forEach(({ input, output }, index) => {
      const inputBackup = clone(input);
      const ourResult = solver(...input);

      const fmt = (d: any) => JSON.stringify(d);
      const printInput = fmt(input).replace(/^\[(.*)\]$/, '$1');
      const printInputBackup = fmt(inputBackup).replace(/^\[(.*)\]$/, '$1');
      const printResult = fmt(output);
      const printOurResult = fmt(ourResult);

      const testTitle = `${index}: ${fnName}(${printInputBackup}) => ${printOurResult}; ${printResult}`;

      test(testTitle, () => {
        expect(ourResult).toEqual(output);
      });
    });
  };

  const autoTestRunner = (testCases: TestCases, solvers: SolverFilePaths) => {
    solvers.forEach((solver) => {
      const fn = exportOf(solver) as Solver;
      const solverName = path.basename(solver);

      singleTestRunner(testCases, fn, `${problemName} - ${solverName}`);
    });
  };

  const makeAutoTester = (solvers: SolverFilePaths) => (testCases: TestCases) =>
    autoTestRunner(testCases, solvers);

  return {
    testRunner: singleTestRunner,
    autoTestRunner: makeAutoTester(tsSolvers),
    tsTestRunner: makeAutoTester(tsSolvers),
    jsTestRunner: makeAutoTester(jsSolvers),
    allTestRunner: makeAutoTester([...tsSolvers, ...jsSolvers]),
  };
};
