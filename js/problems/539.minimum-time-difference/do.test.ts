import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: ['23:59', '00:00'],
    output: 1,
  },
  {
    input: ['11:20', '12:21'],
    output: 61,
  },
  {
    input: ['00:55', '12:56'],
    output: 719,
  },
  {
    input: ['00:55', '00:55'],
    output: 0,
  },
  {
    input: ['1:01', '2:03', '3:03', '4:03', '5:05', '6:06', '7:07', '8:08'],
    output: 60,
  },
  {
    input: ['3:03', '8:08', '5:05', '2:03', '1:01', '6:06', '4:03', '7:07'],
    output: 60,
  },
]);

// * ------------------------------------------------

import { findMinDifference } from './solution';
testRunner(cases, findMinDifference);
