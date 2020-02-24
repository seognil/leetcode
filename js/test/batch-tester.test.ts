import path from 'path';
import glob from 'glob';

// * ------------------------------------------------ preparation

const problems = glob.sync('./src/*');

const rootPath = process.cwd();

type Path = string;

const exportOf = (p: Path) => {
  const output = require(path.resolve(rootPath, p));
  return output.default || output;
};

const globTest = (p: Path) => glob.sync(path.join(p, '*test*'));
const globSolver = (p: Path) => glob.sync(path.join(p, '/!(*.test).{js,ts}'));

// * ------------------------------------------------ test runner

problems.forEach((problemPath) => {
  const [testPath] = globTest(problemPath);

  if (testPath) {
    const testData = exportOf(testPath);
    const solverPaths = globSolver(problemPath);

    solverPaths.forEach((p) => {
      const fn = exportOf(p);

      test(`${p}`, () => {
        testData.forEach(([input, output]: any[]) => {
          expect(fn(...input)).toEqual(output);
        });
      });
    });
  }
});
