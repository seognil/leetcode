import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number, number];
type Output = number;

// Explanation:
// row 1: 0
// row 2: 01
// row 3: 0110
// row 4: 01101001

const cases = makeTestCases<Input, Output>([
  //
  { input: [1, 1], output: 0 },
  { input: [2, 1], output: 0 },
  { input: [2, 2], output: 1 },
  { input: [4, 5], output: 1 },
]);

// * ------------------------------------------------

import { kthGrammar } from './solution';
import { kthGrammar as fn2 } from './solution-readable';
testRunner(cases, kthGrammar);
testRunner(cases, fn2, 'fn2');
