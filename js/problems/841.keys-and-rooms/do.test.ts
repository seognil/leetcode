import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[][];
type Output = boolean;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [[1], [2], [3], []],
    output: true,
  },
  {
    input: [[1, 3], [3, 0, 1], [2], [0]],
    output: false,
  },
  {
    input: [[]],
    output: true,
  },
  {
    input: [[1], [1]],
    output: true,
  },
]);

// * ------------------------------------------------

import { canVisitAllRooms } from './solution';
testRunner(cases, canVisitAllRooms);
