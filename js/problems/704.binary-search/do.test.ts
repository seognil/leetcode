import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[-1, 0, 3, 5, 9, 12], 9],
    output: 4,
  },
  {
    input: [[-1, 0, 3, 5, 9, 12], 2],
    output: -1,
  },

  {
    input: [[1, 2, 3, 4, 5], -99],
    output: -1,
  },
  {
    input: [[1, 2, 3, 4, 5], 99],
    output: -1,
  },

  {
    input: [[], 2],
    output: -1,
  },
  {
    input: [[1], 2],
    output: -1,
  },
  {
    input: [[2], 2],
    output: 0,
  },
]);

// * ------------------------------------------------

import { search } from './solution';
testRunner(cases, search);
