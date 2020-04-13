import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: '42', output: 42 },
  { input: '   -42', output: -42 },
  { input: '4193 with words', output: 4193 },
  { input: 'words and 987', output: 0 },
  { input: '-91283472332', output: -2147483648 },

  { input: '+1', output: 1 },
]);

// * ------------------------------------------------

import { myAtoi } from './solution';
testRunner(cases, myAtoi);

import { myAtoi as fancy } from './solution-fancy';
testRunner(cases, fancy, 'fancy');
