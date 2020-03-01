import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [string[], string];
type Output = number;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [['0201', '0101', '0102', '1212', '2002'], '0202'],
    output: 6,
  },
  {
    input: [['8888'], '0009'],
    output: 1,
  },
  {
    input: [['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888'],
    output: -1,
  },
  {
    input: [['0024'], '4444'],
    output: 16,
  },
  {
    input: [['0000'], '8888'],
    output: -1,
  },
  {
    input: [['6666'], '6666'],
    output: -1,
  },
  {
    input: [['0001'], '0000'],
    output: 0,
  },
]);

// * ------------------------------------------------

import { openLock } from './solution';
import { openLock as fnMid } from './solution-normal';
import { openLock as fnNaive } from './solution-naive';
testRunner(cases, openLock);
testRunner(cases, fnMid, 'normal-speed');
testRunner(cases, fnNaive, 'naive');
