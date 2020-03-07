import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number[];

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [73, 74, 75, 71, 69, 72, 76, 73],
    output: [1, 1, 4, 2, 1, 1, 0, 0],
  },
  {
    input: [1, 2, 6, 5, 4, 3, 4, 5, 7, 6, 5],
    output: [1, 1, 6, 5, 3, 1, 1, 1, 0, 0, 0],
  },
]);

// * ------------------------------------------------

import { dailyTemperatures as brute } from './solution-simple';
import { dailyTemperatures } from './solution';
testRunner(cases, brute, 'brute');
testRunner(cases, dailyTemperatures);
