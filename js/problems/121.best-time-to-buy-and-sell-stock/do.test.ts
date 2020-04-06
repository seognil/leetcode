import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: [7], output: 0 },
  { input: [7, 1, 5, 3, 6, 4], output: 5 },
  { input: [7, 6, 4, 3, 1], output: 0 },
]);

// * ------------------------------------------------

import { maxProfit } from './solution';
testRunner(cases, maxProfit);
