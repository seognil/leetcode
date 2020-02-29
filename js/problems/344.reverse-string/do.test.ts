import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string[];
type Output = string[];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: ['h', 'e', 'l', 'l', 'o'],
    output: ['o', 'l', 'l', 'e', 'h'],
  },
  {
    input: ['H', 'a', 'n', 'n', 'a', 'h'],
    output: ['h', 'a', 'n', 'n', 'a', 'H'],
  },
  {
    input: [],
    output: [],
  },
  {
    input: ['a'],
    output: ['a'],
  },
]);

// * ------------------------------------------------

import { reverseString } from './solution';
testRunner(cases, reverseString);
