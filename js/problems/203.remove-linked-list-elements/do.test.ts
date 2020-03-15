import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type MaybeList = ListNode | null;
type Input = [MaybeList, number];
type Output = MaybeList;

const a2l = arrayToList;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [a2l([1, 2, 6, 3, 4, 5, 6]), 6],
    output: a2l([1, 2, 3, 4, 5]),
  },
  {
    input: [a2l([1, 2, 3, 4]), 99],
    output: a2l([1, 2, 3, 4]),
  },
  {
    input: [a2l([1, 2, 6, 6, 6, 5, 4]), 6],
    output: a2l([1, 2, 5, 4]),
  },
  {
    input: [a2l([1, 2, 6, 6, 6]), 6],
    output: a2l([1, 2]),
  },
  {
    input: [a2l([6, 6, 6]), 6],
    output: a2l([]),
  },
  {
    input: [a2l([6, 6, 6, 5, 4]), 6],
    output: a2l([5, 4]),
  },
  {
    input: [a2l([]), 2],
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { removeElements } from './solution';
testRunner(cases, removeElements);
