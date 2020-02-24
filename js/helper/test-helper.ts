import path from 'path';
import glob from 'glob';

type Input = any[];
type Output = any;
export type TestCase<I = Input, O = Output> = [I, O];
export type TestCases<I = Input, O = Output> = TestCase<I, O>[];

type Path = string;

type Solver = Function;
type SolverFilePath = string;
type SolverFilePaths = SolverFilePath[];

export const makeTestRunner = (p: Path) => {
  const currentPath = p;
  const problemName = path.basename(currentPath);
  const solvers = glob.sync(path.join(p, '/!(*.test).{js,ts}'));
  const tsSolvers = solvers.filter((e) => e.match(/ts$/));
  const jsSolvers = solvers.filter((e) => e.match(/js$/));

  const exportOf = (p: Path) => {
    const output = require(path.resolve(p));
    return output.default || output;
  };

  const testRunner = (testCases: TestCases, solvers: SolverFilePaths) => {
    solvers.forEach((solver) => {
      const fn = exportOf(solver) as Solver;
      const solverName = path.basename(solver);

      test(`${problemName} - ${solverName}`, () => {
        testCases.forEach(([input, output]) => {
          expect(fn(...input)).toEqual(output);
        });
      });
    });
  };

  const makeNewTester = (solvers: SolverFilePaths) => (testCases: TestCases) =>
    testRunner(testCases, solvers);

  return {
    testRunner: makeNewTester(tsSolvers),
    tsTestRunner: makeNewTester(tsSolvers),
    jsTestRunner: makeNewTester(jsSolvers),
    allTestRunner: makeNewTester([...tsSolvers, ...jsSolvers]),
  };
};
