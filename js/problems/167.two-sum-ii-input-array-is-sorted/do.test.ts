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
]);

// * ------------------------------------------------

import { twoSum } from './solution';
testRunner(cases, twoSum);
