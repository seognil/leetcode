import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from './../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = ListNode | null;
type Output = ListNode | null;

const a2l = arrayToList;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2l([1, 1, 2]),
    output: a2l([1, 2]),
  },
  {
    input: a2l([1, 1, 2, 3, 3]),
    output: a2l([1, 2, 3]),
  },
  {
    input: a2l([1, 1, 1, 2, 2, 2, 3]),
    output: a2l([1, 2, 3]),
  },
  {
    input: a2l([]),
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { deleteDuplicates } from './solution';

testRunner(cases, deleteDuplicates);
