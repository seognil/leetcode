import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = ListNode | null;
type Output = ListNode | null;

const a2l = arrayToList;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2l([1, 2, 3, 4]),
    output: a2l([2, 1, 4, 3]),
  },
  {
    input: a2l([1]),
    output: a2l([1]),
  },
  {
    input: a2l([1, 2, 3]),
    output: a2l([2, 1, 3]),
  },
  {
    input: a2l([]),
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { swapPairs } from './solution';
testRunner(cases, swapPairs);
