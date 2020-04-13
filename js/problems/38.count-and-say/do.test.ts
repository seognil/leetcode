import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = string;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: 1, output: '1' },
  { input: 2, output: '11' },
  { input: 3, output: '21' },
  { input: 4, output: '1211' },
  { input: 5, output: '111221' },
]);

// * ------------------------------------------------

import { countAndSay } from './solution';
testRunner(cases, countAndSay);
