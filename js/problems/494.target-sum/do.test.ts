import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[1, 1, 1, 1, 1], 3],
    output: 5,
  },
  {
    input: [[1], 2],
    output: 0,
  },
  {
    input: [[1, 2, 3], 999],
    output: 0,
  },
]);

// * ------------------------------------------------

import { findTargetSumWays } from './solution';

testRunner(cases, findTargetSumWays);
