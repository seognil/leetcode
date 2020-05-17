import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 1, 1, 2, 2, 3],
    output: 5,
  },
  {
    input: [0, 0, 1, 1, 1, 1, 2, 3, 3],
    output: 7,
  },
]);

// * ------------------------------------------------

import { removeDuplicates } from './solution';
testRunner(cases, removeDuplicates);
