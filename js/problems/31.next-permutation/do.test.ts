import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number[];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 2, 3],
    output: [1, 3, 2],
  },
  {
    input: [3, 2, 1],
    output: [1, 2, 3],
  },
  {
    input: [1, 1, 5],
    output: [1, 5, 1],
  },
  {
    input: [1, 7, 2, 3, 4],
    output: [1, 7, 2, 4, 3],
  },
  {
    input: [2, 7, 5, 3],
    output: [3, 2, 5, 7],
  },
  {
    input: [4, 7, 5, 3],
    output: [5, 3, 4, 7],
  },
]);

// * ------------------------------------------------

import { nextPermutation } from './solution';
testRunner(cases, nextPermutation);
