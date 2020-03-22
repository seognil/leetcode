import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

// * check binary search only

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 2, 3, 1],
    output: 2,
  },
  {
    input: [1, 2, 1, 3, 5, 6, 4],
    output: 5,
  },

  {
    input: [1, 2, 1],
    output: 1,
  },
  {
    input: [1, 2, 3, 4],
    output: 3,
  },
  {
    input: [4, 3, 2, 1],
    output: 0,
  },
]);

// * ------------------------------------------------

import { findPeakElement } from './solution';
testRunner(cases, findPeakElement);
