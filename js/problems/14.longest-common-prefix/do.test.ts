import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string[];
type Output = string;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: ['flower', 'flow', 'flight'],
    output: 'fl',
  },
  {
    input: ['dog', 'racecar', 'car'],
    output: '',
  },
  {
    input: ['abc', 'abc', 'abc'],
    output: 'abc',
  },
  {
    input: ['abc', 'abca', 'abc'],
    output: 'abc',
  },
  {
    input: [''],
    output: '',
  },
  {
    input: [],
    output: '',
  },
]);

// * ------------------------------------------------

import { longestCommonPrefix } from './solution';
testRunner(cases, longestCommonPrefix);
