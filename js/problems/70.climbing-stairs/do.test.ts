import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: 1, output: 1 },
  { input: 2, output: 2 },
  { input: 3, output: 3 },
  { input: 4, output: 5 },
  { input: 5, output: 8 },
  { input: 6, output: 13 },
]);

// * ------------------------------------------------

import { climbStairs } from './solution';
testRunner(cases, climbStairs);
