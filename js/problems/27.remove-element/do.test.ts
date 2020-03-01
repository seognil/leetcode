import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[3, 2, 2, 3], 3],
    output: 2,
  },
  {
    input: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
    output: 5,
  },
]);

// * ------------------------------------------------

import { removeElement } from './solution';
testRunner(cases, removeElement);
