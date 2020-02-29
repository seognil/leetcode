import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: [3, 6, 1, 0],
    output: 1,
  },
  {
    input: [1, 2, 3, 4],
    output: -1,
  },
  {
    input: [],
    output: -1,
  },
]);

// * ------------------------------------------------

import { dominantIndex } from './solution';
import { dominantIndex as solution2 } from './solution-2';
testRunner(cases, dominantIndex);
testRunner(cases, solution2, 'solution2');
