import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 1, 2],
    output: 2,
  },
  {
    input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    output: 5,
  },
]);

// * ------------------------------------------------

import { removeDuplicates } from './solution';
testRunner(cases, removeDuplicates);
