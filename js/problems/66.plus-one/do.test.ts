import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number[];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 2, 3],
    output: [1, 2, 4],
  },
  {
    input: [4, 3, 2, 1],
    output: [4, 3, 2, 2],
  },
  {
    input: [9, 9, 9, 9],
    output: [1, 0, 0, 0, 0],
  },
  {
    input: [9],
    output: [1, 0],
  },
]);

// * ------------------------------------------------

import { plusOne } from './solution';
import { plusOne as solution2 } from './solution';
testRunner(cases, plusOne);
testRunner(cases, solution2, 'solution2');
