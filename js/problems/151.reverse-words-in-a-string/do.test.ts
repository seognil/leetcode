import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = string;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: 'the sky is blue',
    output: 'blue is sky the',
  },
  {
    input: '  hello world!  ',
    output: 'world! hello',
  },
  {
    input: 'a good   example',
    output: 'example good a',
  },
]);

// * ------------------------------------------------

import { reverseWords } from './solution';
testRunner(cases, reverseWords);
