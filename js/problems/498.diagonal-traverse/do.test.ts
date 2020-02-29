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
    output: [1, 2, 4, 7, 5, 3, 6, 8, 9],
  },
  {
    input: [
      [1, 2],
      [4, 5],
      [7, 8],
    ],
    output: [1, 2, 4, 7, 5, 8],
  },
  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    output: [1, 2, 4, 5, 3, 6],
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

import { findDiagonalOrder } from './solution';
testRunner(cases, findDiagonalOrder);
