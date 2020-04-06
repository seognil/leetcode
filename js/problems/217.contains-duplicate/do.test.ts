import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = boolean;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //

  { input: [1, 2, 3, 1], output: true },
  { input: [1, 2, 3, 4], output: false },
  { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], output: true },
]);

// * ------------------------------------------------

import { containsDuplicate } from './solution';
testRunner(cases, containsDuplicate);
