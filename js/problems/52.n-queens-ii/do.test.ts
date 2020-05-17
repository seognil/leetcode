import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: 1,
    output: 1,
  },
  {
    input: 3,
    output: 0,
  },
  {
    input: 4,
    output: 2,
  },
  {
    input: 5,
    output: 10,
  },
]);

// * ------------------------------------------------

import { totalNQueens } from './solution';
testRunner(cases, totalNQueens);
