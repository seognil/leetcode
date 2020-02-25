import path from 'path';
import glob from 'glob';
import { curry } from 'ramda';

type Input = any[];
type Output = any;
export type TestCase<I = Input, O = Output> = [I, O];
export type TestCases<I = Input, O = Output> = TestCase<I, O>[];

type Path = string;

type Solver = Function;
type SolverFilePath = string;
type SolverFilePaths = SolverFilePath[];

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

  const singleTestRunner = (
    testCases: TestCases,
    solver: Solver,
    title: string = solver.name || 'test',
  ) => {
    test(`${problemName} - ${title}`, () => {
      testCases.forEach(([input, output]) => {
        expect(solver(...input)).toEqual(output);
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
