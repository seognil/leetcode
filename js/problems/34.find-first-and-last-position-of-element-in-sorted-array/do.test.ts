import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = [number, number];

const arr = (val: number, len: number): number[] => new Array(len).fill(val);
const comb = (...arrs: number[][]): number[] => arrs.flat();

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[5, 7, 7, 8, 8, 10], 8],
    output: [3, 4],
  },
  {
    input: [[5, 7, 7, 8, 8, 10], 6],
    output: [-1, -1],
  },

  {
    input: [[1, 2, 3, 4, 5, 6, 6, 6, 6, 6], 6],
    output: [5, 9],
  },
  {
    input: [[8, 8, 8, 8, 8, 8, 8, 8, 8, 8], 8],
    output: [0, 9],
  },
  {
    input: [[2, 2, 2, 2, 2, 3, 4, 5, 6, 7], 2],
    output: [0, 4],
  },

  {
    input: [comb(arr(0, 5), arr(6, 5), arr(7, 5)), 6],
    output: [5, 9],
  },

  {
    input: [comb(arr(0, 200), arr(6, 5), arr(7, 200)), 6],
    output: [200, 204],
  },
  {
    input: [comb(arr(0, 5), arr(6, 200), arr(7, 5)), 6],
    output: [5, 204],
  },
]);

// * ------------------------------------------------

import { searchRange } from './solution';
testRunner(cases, searchRange);
