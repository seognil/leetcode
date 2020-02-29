import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [1, 4, 3, 2],
    output: 4,
  },
  {
    input: [],
    output: 0,
  },
  {
    input: [1, 2],
    output: 1,
  },
]);

// * ------------------------------------------------

import { arrayPairSum } from './solution';
testRunner(cases, arrayPairSum);
