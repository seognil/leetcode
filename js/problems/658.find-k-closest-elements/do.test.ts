import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number, number];
type Output = number[];

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[1, 2, 3, 4, 5], 4, 3],
    output: [1, 2, 3, 4],
  },

  {
    input: [[1, 2, 3, 4, 5], 2, -1],
    output: [1, 2],
  },
  {
    input: [[1, 2, 3, 4, 5], 2, 99],
    output: [4, 5],
  },

  {
    input: [[1, 2, 3, 40, 41, 42, 43], 3, 40],
    output: [40, 41, 42],
  },

  {
    input: [[1, 3, 5, 7, 9], 2, 4],
    output: [3, 5],
  },

  {
    input: [[1, 2, 3, 4, 5], 2, 3],
    output: [2, 3],
  },
  {
    input: [[1, 2, 3, 4, 5], 3, 3],
    output: [2, 3, 4],
  },
  {
    input: [[1, 2, 3, 4, 5], 4, 3],
    output: [1, 2, 3, 4],
  },
]);

// * ------------------------------------------------

import { findClosestElements } from './solution';
testRunner(cases, findClosestElements);
