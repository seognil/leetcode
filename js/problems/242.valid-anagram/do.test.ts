import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [string, string];
type Output = boolean;

const cases = makeTestCases<Input, Output>([
  //

  { input: ['anagram', 'nagaram'], output: true },
  { input: ['rat', 'car'], output: false },
  { input: ['rat', 'ca'], output: false },
]);

// * ------------------------------------------------

import { isAnagram } from './solution';
testRunner(cases, isAnagram);

import { isAnagram as fancy } from './solution-fancy';
testRunner(cases, fancy, 'fancy');
