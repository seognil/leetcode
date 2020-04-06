import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: 123, output: 321 },
  { input: -123, output: -321 },
  { input: 120, output: 21 },

  { input: 4294967296, output: 0 },
  { input: 0, output: 0 },
]);

// * ------------------------------------------------

import { reverse } from './solution';
testRunner(cases, reverse);
