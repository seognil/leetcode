import { arrayToList } from '../../structures/linked-list/list-to-array';
import { ListNode } from '../../structures/linked-list/list-node';

import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type MaybeList = ListNode | null;

type Input = [MaybeList, MaybeList];
type Output = MaybeList;

const a2l = arrayToList;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [a2l([2, 4, 3]), a2l([5, 6, 4])],
    output: a2l([7, 0, 8]),
  },
  {
    input: [a2l([1, 2, 3, 4]), a2l([2])],
    output: a2l([3, 2, 3, 4]),
  },
  {
    input: [a2l([2]), a2l([1, 2, 3, 4])],
    output: a2l([3, 2, 3, 4]),
  },
  {
    input: [a2l([1, 2, 4]), a2l([1, 2, 6])],
    output: a2l([2, 4, 0, 1]),
  },
]);

// * ------------------------------------------------

import { addTwoNumbers } from './solution';
testRunner(cases, addTwoNumbers);
