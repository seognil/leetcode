import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = boolean;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: '9,3,4,#,#,1,#,#,2,#,6,#,#',
    output: true,
  },
  {
    input: '1,#',
    output: false,
  },
  {
    input: '9,#,#,1',
    output: false,
  },

  {
    input: '9,#,1,#,#',
    output: true,
  },
  {
    input: '9,#,#,#,1',
    output: false,
  },

  {
    input: '#',
    output: true,
  },
]);

// * ------------------------------------------------

import { isValidSerialization } from './solution';
testRunner(cases, isValidSerialization);

import { isValidSerialization as wipe } from './solution-wipe';
testRunner(cases, wipe, 'wipe');
