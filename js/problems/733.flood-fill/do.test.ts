import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[][], number, number, number];
type Output = number[][];

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2,
    ],
    output: [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ],
  },
  {
    input: [
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      1,
    ],
    output: [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
  },

  {
    input: [[], 1, 1, 1],
    output: [],
  },
  {
    input: [[[]], 1, 1, 1],
    output: [[]],
  },
]);

// * ------------------------------------------------

import { floodFill } from './solution';

testRunner(cases, floodFill);
