import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = string;
type Output = boolean;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: '()',
    output: true,
  },
  {
    input: '()[]{}',
    output: true,
  },
  {
    input: '(]',
    output: false,
  },
  {
    input: '([)]',
    output: false,
  },
  {
    input: '{[]}',
    output: true,
  },
  {
    input: '{[[](())]{{}()[(){}]}}',
    output: true,
  },
  {
    input: '{[[](())]{}()[(){}]}}',
    output: false,
  },
]);

// * ------------------------------------------------

import { isValid } from './solution';
testRunner(cases, isValid);
