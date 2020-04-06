import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number[]];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[1, 3], [2]],
    output: 2.0,
  },

  {
    input: [
      [1, 2],
      [3, 4],
    ],
    output: 2.5,
  },

  {
    input: [
      [1, 3, 4, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ],
    output: 4.5,
  },

  {
    input: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [1, 3, 4, 9],
    ],
    output: 4.5,
  },

  {
    input: [
      [1, 2],
      [3, 4, 5, 6, 7, 8, 9, 10],
    ],
    output: 5.5,
  },

  {
    input: [
      [3, 4, 5, 6, 7, 8, 9, 10],
      [1, 2],
    ],
    output: 5.5,
  },
]);

// * ------------------------------------------------

// import { findMedianSortedArrays } from './solution';
// testRunner(cases, findMedianSortedArrays);
