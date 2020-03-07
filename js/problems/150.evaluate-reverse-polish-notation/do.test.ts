import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string[];
type Output = number;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: ['2', '1', '+', '3', '*'],
    output: 9,
  },
  {
    input: ['4', '13', '5', '/', '+'],
    output: 6,
  },
  {
    input: ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'],
    output: 22,
  },
  {
    input: ['10', '6', '-'],
    output: 4,
  },
]);

// * ------------------------------------------------

import { evalRPN } from './solution';
testRunner(cases, evalRPN);
