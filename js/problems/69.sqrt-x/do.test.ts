import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: 0, output: 0 },
  { input: 1, output: 1 },
  { input: 2, output: 1 },
  { input: 3, output: 1 },
  { input: 4, output: 2 },
  { input: 5, output: 2 },
  { input: 6, output: 2 },
  { input: 7, output: 2 },
  { input: 8, output: 2 },
  { input: 9, output: 3 },
  { input: 10, output: 3 },

  { input: 1073741824, output: 32768 },
  { input: 1073741824, output: 32768 },
  { input: 1073741823, output: 32767 },
]);

// * ------------------------------------------------

import { mySqrt } from './solution';
testRunner(cases, mySqrt);

import { mySqrt as newton } from './solution-newton-int';
testRunner(cases, newton, 'newton');
