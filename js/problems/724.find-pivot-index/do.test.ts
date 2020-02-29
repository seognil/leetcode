import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 7, 3, 6, 5, 6],
    output: 3,
  },
  {
    input: [1, 2, 3],
    output: -1,
  },
  {
    input: [-1, -1, -1, 0, 1, 1],
    output: 0,
  },
  {
    input: [1],
    output: 0,
  },
  {
    input: [],
    output: -1,
  },
]);

// * ------------------------------------------------

import { pivotIndex } from './solution';
testRunner(cases, pivotIndex);
