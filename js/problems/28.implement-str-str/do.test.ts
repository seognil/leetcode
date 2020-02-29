import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [string, string];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: ['hello', 'll'],
    output: 2,
  },
  {
    input: ['aaaaa', 'bba'],
    output: -1,
  },
  {
    input: ['abacababc', 'abab'],
    output: 4,
  },
  {
    input: ['hello', ''],
    output: 0,
  },
]);

// * ------------------------------------------------

import { strStr } from './solution';
testRunner(cases, strStr);
