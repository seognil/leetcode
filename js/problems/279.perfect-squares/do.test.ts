import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: 12, output: 3 },
  { input: 13, output: 2 },
  { input: 7168, output: 4 },

  { input: 1, output: 1 },
  { input: 4, output: 1 },
  { input: 9, output: 1 },
  { input: 16, output: 1 },
]);

// * ------------------------------------------------

import { numSquares } from './solution';
import { numSquares as bfs } from './solution-bfs';
import { numSquares as bfs2 } from './solution-bfs-opts';

testRunner(cases, numSquares);
testRunner(cases, bfs, 'bfs');
testRunner(cases, bfs2, 'bfsOpts');
