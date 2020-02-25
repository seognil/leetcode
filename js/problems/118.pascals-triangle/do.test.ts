import { makeTestRunner, TestCases, wrapSingleInput } from '../../helper/test-helper';
const { testRunner } = makeTestRunner(__dirname);

// * ------------------------------------------------

type SingleInput = number;
type Output = number[][];

const cases: TestCases<SingleInput[], Output> = wrapSingleInput([
  //
  {
    input: 5,
    output: [
      //
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ],
  },
  {
    input: 0,
    output: [],
  },
  {
    input: 1,
    output: [[1]],
  },
]);

import { generate } from './solution';
testRunner(cases, generate);
