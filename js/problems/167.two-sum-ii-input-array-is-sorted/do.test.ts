import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = [number, number];

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[2, 7, 11, 15], 9],
    output: [1, 2],
  },
]);

// * ------------------------------------------------

import { twoSum } from './solution';
testRunner(cases, twoSum);
