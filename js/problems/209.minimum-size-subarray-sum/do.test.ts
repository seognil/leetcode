import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number, number[]];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [7, [2, 3, 1, 2, 4, 3]],
    output: 2,
  },
  {
    input: [99, [2, 3, 1, 2, 4, 3]],
    output: 0,
  },
  {
    input: [99, []],
    output: 0,
  },
  {
    input: [99, [1, 2, 99, 3]],
    output: 1,
  },
]);

// * ------------------------------------------------

import { minSubArrayLen } from './solution';
testRunner(cases, minSubArrayLen);
