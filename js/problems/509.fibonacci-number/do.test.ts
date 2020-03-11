import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: 0, output: 0 },
  { input: 1, output: 1 },
  { input: 2, output: 1 },
  { input: 3, output: 2 },
  { input: 4, output: 3 },
  { input: 5, output: 5 },
  { input: 6, output: 8 },
  { input: 7, output: 13 },

  { input: 20, output: 6765 },
  { input: 30, output: 832040 },
  { input: 40, output: 102334155 },
]);

// * ------------------------------------------------

import { fib } from './solution';
testRunner(cases, fib);
