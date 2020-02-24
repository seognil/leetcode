import { makeTestRunner, TestCases } from '../../helper/test-helper';

const { testRunner } = makeTestRunner(__dirname);

import './solution.ts';

// * ------------------------------------------------

type Input = [number[], number];
type Output = [number, number];

const cases: TestCases<Input, Output> = [
  //
  [
    [[2, 7, 11, 15], 9],
    [0, 1],
  ],
  [
    [[3, 2, 4], 6],
    [1, 2],
  ],
  [
    [[0, 4, 3, 0], 0],
    [0, 3],
  ],
];

testRunner(cases);
