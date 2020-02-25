import { makeTestRunner, TestCases } from '../../helper/test-helper';
const { testRunner } = makeTestRunner(__dirname);

// * ------------------------------------------------

type Input = [number[], number];
type Output = [number, number];

const cases: TestCases<Input, Output> = [
  //
  {
    input: [[2, 7, 11, 15], 9],
    output: [0, 1],
  },
  {
    input: [[3, 2, 4], 6],
    output: [1, 2],
  },
  {
    input: [[0, 4, 3, 0], 0],
    output: [0, 3],
  },
];

import { twoSum } from './solution';
testRunner(cases, twoSum);
