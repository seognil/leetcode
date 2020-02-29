import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper'; // * ------------------------------------------------

type Input = [string, string];
type Output = string;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: ['11', '1'],
    output: '100',
  },
  {
    input: ['1010', '1011'],
    output: '10101',
  },
  {
    input: ['', ''],
    output: '0',
  },
  {
    input: ['', '1'],
    output: '1',
  },
  {
    input: ['', '0'],
    output: '0',
  },
]);

import { addBinary } from './solution';
testRunner(cases, addBinary);
