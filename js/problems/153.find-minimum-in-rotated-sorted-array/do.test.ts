import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: [3, 4, 5, 1, 2], output: 1 },
  { input: [4, 5, 6, 7, 0, 1, 2], output: 0 },

  { input: [3, 4, 5, 6, 7, 8, 9], output: 3 },
  { input: [3, 4, 5, 6, 7, 8, 9, 0], output: 0 },

  { input: [0, 1, 2, 3], output: 0 },
  { input: [4, 0, 1, 2, 3], output: 0 },
  { input: [4, 5, 0, 1, 2, 3], output: 0 },
  { input: [4, 5, 6, 0, 1, 2, 3], output: 0 },
  { input: [4, 5, 6, 7, 0, 1, 2, 3], output: 0 },
  { input: [4, 5, 6, 7, 8, 0, 1, 2, 3], output: 0 },
  { input: [4, 5, 6, 7, 8, 9, 0, 1, 2, 3], output: 0 },

  { input: [1], output: 1 },
  { input: [1, 2], output: 1 },
  { input: [2, 1], output: 1 },
  { input: [1, 2, 3], output: 1 },
  { input: [3, 1, 2], output: 1 },
  { input: [2, 3, 1], output: 1 },
]);

// * ------------------------------------------------

import { findMin } from './solution';
testRunner(cases, findMin);
