import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Matrix = number[][];

type Input = Matrix;
type Output = Matrix;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],

    output: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },
  {
    input: [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],

    output: [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ],
  },
]);

// * ------------------------------------------------

import { rotate } from './solution';
testRunner(cases, rotate);
