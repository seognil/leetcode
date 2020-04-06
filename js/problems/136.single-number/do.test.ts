import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: [2, 2, 1], output: 1 },
  { input: [4, 1, 2, 1, 2], output: 4 },
]);

// * ------------------------------------------------

import { singleNumber } from './solution';
testRunner(cases, singleNumber);
