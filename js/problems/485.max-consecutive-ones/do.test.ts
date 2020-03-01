import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 1, 0, 1, 1, 1],
    output: 3,
  },
  {
    input: [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
    output: 3,
  },
  {
    input: [],
    output: 0,
  },
  {
    input: [0],
    output: 0,
  },
  {
    input: [1],
    output: 1,
  },
]);

// * ------------------------------------------------

import { findMaxConsecutiveOnes } from './solution';
testRunner(cases, findMaxConsecutiveOnes);
