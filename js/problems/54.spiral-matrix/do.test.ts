import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[][];
type Output = number[];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    output: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ],
    output: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8],
  },
  {
    input: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
  },
  {
    input: [[1, 2, 3]],
    output: [1, 2, 3],
  },
  {
    input: [[1], [2], [3]],
    output: [1, 2, 3],
  },
  {
    input: [],
    output: [],
  },
  {
    input: [[]],
    output: [],
  },
]);

// * ------------------------------------------------

import { spiralOrder } from './solution';
testRunner(cases, spiralOrder);
