import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: 'leetcode', output: 0 },

  { input: 'loveleetcode', output: 2 },

  { input: 'aaaa', output: -1 },
]);

// * ------------------------------------------------

import { firstUniqChar } from './solution-map';
testRunner(cases, firstUniqChar);

import { firstUniqChar as map } from './solution-map';
testRunner(cases, map, 'hashmap');

import { firstUniqChar as fancy } from './solution-last-index';
testRunner(cases, fancy, 'fancy js');
