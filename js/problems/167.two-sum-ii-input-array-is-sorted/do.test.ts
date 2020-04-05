import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = [number, number];

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[2, 7, 11, 15], 9],
    output: [1, 2],
  },
  {
    input: [[2, 7, 11, 15], 13],
    output: [1, 3],
  },
  {
    input: [[2, 7, 11, 15], 17],
    output: [1, 4],
  },
  {
    input: [[2, 7, 11, 15], 18],
    output: [2, 3],
  },
  {
    input: [[2, 7, 11, 15], 22],
    output: [2, 4],
  },
  {
    input: [[2, 7, 11, 15], 26],
    output: [3, 4],
  },

  {
    input: [[-20000, -10000, 1, 2, 3, 4, 20, 21, 96, 97, 98, 99, 10000, 20000], 41],
    output: [7, 8],
  },
]);

// * ------------------------------------------------

import { twoSum } from './solution';
testRunner(cases, twoSum);
