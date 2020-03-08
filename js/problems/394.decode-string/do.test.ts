import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = string;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: '3[a]2[bc]', output: 'aaabcbc' },
  { input: '3[a2[c]]', output: 'accaccacc' },
  { input: '2[abc]3[cd]ef', output: 'abcabccdcdcdef' },

  { input: 'qq2[a]2[b]qq', output: 'qqaabbqq' },
  { input: 'q1[a1[b1[c]b]a]q', output: 'qabcbaq' },
  { input: '11[a]', output: 'aaaaaaaaaaa' },

  { input: '', output: '' },
]);

// * ------------------------------------------------

import { decodeString } from './solution';
testRunner(cases, decodeString);
