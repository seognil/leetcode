import { arrayToList } from '../../structures/linked-list/list-to-array';
import { ListNode } from '../../structures/linked-list/list-node';

import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [ListNode | null, ListNode | null];
type Output = ListNode | null;

const a2l = arrayToList;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [a2l([1, 2, 4]), a2l([1, 3, 4])],
    output: a2l([1, 1, 2, 3, 4, 4]),
  },
  {
    input: [a2l([1, 2, 3, 7, 8, 9]), a2l([4, 5, 6])],
    output: a2l([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  },
  {
    input: [a2l([1, 2, 4]), a2l([])],
    output: a2l([1, 2, 4]),
  },
  {
    input: [a2l([]), a2l([])],
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { mergeTwoLists } from './solution';
testRunner(cases, mergeTwoLists);
