import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = number[];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: 0,
    output: [1],
  },
  {
    input: 1,
    output: [1, 1],
  },
  {
    input: 2,
    output: [1, 2, 1],
  },
  {
    input: 3,
    output: [1, 3, 3, 1],
  },
  {
    input: 4,
    output: [1, 4, 6, 4, 1],
  },
]);

// * ------------------------------------------------

import { getRow } from './solution';
testRunner(cases, getRow);
