import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = string;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: 'babad', output: 'bab' },
  { input: 'cbbd', output: 'bb' },
  { input: 'a', output: 'a' },

  { input: 'ac', output: 'a' },
  { input: '', output: '' },
]);

// * ------------------------------------------------

import { longestPalindrome } from './solution';
testRunner(cases, longestPalindrome);
