import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: [1, 3, 4, 2, 2], output: 2 },
  { input: [3, 1, 3, 4, 2], output: 3 },
]);

// * ------------------------------------------------

import { findDuplicate } from './solution';
testRunner(cases, findDuplicate);
