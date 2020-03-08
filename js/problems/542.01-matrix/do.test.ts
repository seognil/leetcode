import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Matrix = number[][];
type Input = Matrix;
type Output = Matrix;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    output: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
  },

  {
    input: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    output: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ],
  },

  {
    input: [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 1],
      [0, 0, 1, 1, 1],
    ],
    output: [
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 2],
      [0, 0, 1, 2, 3],
    ],
  },

  {
    input: [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 1, 1],
    ],
    output: [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 2, 2, 2, 1],
      [2, 1, 2, 3, 2],
      [1, 0, 1, 2, 3],
    ],
  },

  {
    input: [],
    output: [],
  },
  {
    input: [[]],
    output: [[]],
  },
]);

// * ------------------------------------------------

import { updateMatrix } from './solution';
testRunner(cases, updateMatrix);
