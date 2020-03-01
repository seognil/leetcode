import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number[];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [0, 1, 0, 3, 12],
    output: [1, 3, 12, 0, 0],
  },
  {
    input: [],
    output: [],
  },
  {
    input: [1],
    output: [1],
  },
  {
    input: [0],
    output: [0],
  },
]);

// * ------------------------------------------------

import { moveZeroes } from './solution';
testRunner(cases, moveZeroes);
