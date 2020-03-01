import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [number[], number];
type Output = number[];

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [[1, 2, 3, 4, 5, 6, 7], 3],
    output: [5, 6, 7, 1, 2, 3, 4],
  },
  {
    input: [[-1, -100, 3, 99], 2],
    output: [3, 99, -1, -100],
  },
  {
    input: [[1, 2, 3, 4], 6],
    output: [3, 4, 1, 2],
  },
  {
    input: [[1, 2, 3, 4], 0],
    output: [1, 2, 3, 4],
  },
  {
    input: [[1], 6],
    output: [1],
  },
  {
    input: [[], 6],
    output: [],
  },
]);

// * ------------------------------------------------

import { rotate as fn1 } from './solution';
import { rotate as fn2 } from './solution-map';
import { rotate as fn3 } from './solution-pointer';
testRunner(cases, fn1, 'popUnshift');
testRunner(cases, fn2, 'mapWriteBack');
testRunner(cases, fn3, 'pointer');
