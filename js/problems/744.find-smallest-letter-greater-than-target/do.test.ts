import { LowerLetter } from '../../helper/types';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Char = LowerLetter;

type Input = [Char[], Char];
type Output = Char;

const cases = makeTestCases<Input, Output>([
  //
  { input: [['c', 'f', 'j'], 'a'], output: 'c' },
  { input: [['c', 'f', 'j'], 'c'], output: 'f' },
  { input: [['c', 'f', 'j'], 'd'], output: 'f' },
  { input: [['c', 'f', 'j'], 'g'], output: 'j' },
  { input: [['c', 'f', 'j'], 'j'], output: 'c' },
  { input: [['c', 'f', 'j'], 'k'], output: 'c' },

  { input: [['a', 'b'], 'z'], output: 'a' },
]);

// * ------------------------------------------------

import { nextGreatestLetter } from './solution';
testRunner(cases, nextGreatestLetter);
