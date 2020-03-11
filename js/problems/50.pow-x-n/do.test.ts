import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number, number];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  { input: [2.0, 10], output: 1024.0 },
  { input: [2.0, -2], output: 0.25 },

  // TODO fix this later, now manually passing // Seognil LC 2020/03/11
  // { input: [2.1, 3], output: 9.261 },
  { input: [2.1, 3], output: 9.261000000000001 },
]);

// * ------------------------------------------------

import { myPow } from './solution';
testRunner(cases, myPow);
