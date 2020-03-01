import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = string;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: "Let's take LeetCode contest",
    output: "s'teL ekat edoCteeL tsetnoc",
  },
]);

// * ------------------------------------------------

import { reverseWords } from './solution';
testRunner(cases, reverseWords);
