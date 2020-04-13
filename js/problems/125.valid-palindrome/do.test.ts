import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = boolean;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: 'A man, a plan, a canal: Panama', output: true },
  { input: 'race a car', output: false },
]);

// * ------------------------------------------------

import { isPalindrome } from './solution';
testRunner(cases, isPalindrome);

import { isPalindrome as fancy } from './solution-fancy';
testRunner(cases, fancy, 'fancy');
