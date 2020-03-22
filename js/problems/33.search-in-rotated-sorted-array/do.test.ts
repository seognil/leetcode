import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[4, 5, 6, 7, 0, 1, 2], 0],
    output: 4,
  },
  {
    input: [[4, 5, 6, 7, 0, 1, 2], 3],
    output: -1,
  },

  {
    input: [[3, 4, 5, 6, 7, 8, 9, 0, 1, 2], 5],
    output: 2,
  },
  {
    input: [[3, 4, 5, 6, 7, 8, 9, 0, 1, 2], 1],
    output: 8,
  },
  {
    input: [[7, 8, 9, 0, 1, 2, 3, 4, 5, 6], 8],
    output: 1,
  },
  {
    input: [[7, 8, 9, 0, 1, 2, 3, 4, 5, 6], 5],
    output: 8,
  },
]);

// * ------------------------------------------------

import { search } from './solution';
testRunner(cases, search);
