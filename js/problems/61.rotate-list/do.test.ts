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
    input: [a2l([1, 2, 3, 4, 5]), 2],
    output: a2l([4, 5, 1, 2, 3]),
  },
  {
    input: [a2l([0, 1, 2]), 4],
    output: a2l([2, 0, 1]),
  },

  {
    input: [a2l([0]), 4],
    output: a2l([0]),
  },
  {
    input: [a2l([]), 4],
    output: a2l([]),
  },

  {
    input: [a2l([1, 2, 3, 4, 5]), 5],
    output: a2l([1, 2, 3, 4, 5]),
  },
  {
    input: [a2l([1, 2, 3, 4, 5]), 20000000],
    output: a2l([1, 2, 3, 4, 5]),
  },
  {
    input: [a2l([1, 2, 3, 4, 5]), 20000002],
    output: a2l([4, 5, 1, 2, 3]),
  },
]);

// * ------------------------------------------------

import { rotateRight } from './solution';
testRunner(cases, rotateRight);
