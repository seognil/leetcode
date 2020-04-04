import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = boolean;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: 1, output: true },
  { input: 2, output: false },
  { input: 3, output: false },
  { input: 4, output: true },
  { input: 14, output: false },
  { input: 16, output: true },

  { input: 255, output: false },
  { input: 256, output: true },
  { input: 257, output: false },

  { input: 511, output: false },
  { input: 512, output: false },
  { input: 513, output: false },

  { input: 1023, output: false },
  { input: 1024, output: true },
  { input: 1025, output: false },

  { input: 4294967295, output: false },
  { input: 4294967296, output: true },
]);

// * ------------------------------------------------

import { isPerfectSquare } from './solution';
testRunner(cases, isPerfectSquare);
