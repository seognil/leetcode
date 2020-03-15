import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [ListNode | null, number];
type Output = ListNode | null;

const a2l = arrayToList;

const dirtyCases = makeTestCases<Input, Output>([
  //
  { input: [a2l([1, 2, 3, 4, 5]), 2], output: a2l([1, 2, 3, 5]) },

  { input: [a2l([1, 2, 3, 4, 5]), 10], output: a2l([1, 2, 3, 4, 5]) },

  { input: [a2l([1, 2, 3, 4, 5]), 5], output: a2l([2, 3, 4, 5]) },
  { input: [a2l([1, 2, 3, 4, 5]), 1], output: a2l([1, 2, 3, 4]) },
  { input: [a2l([1, 2, 3, 4, 5]), 0], output: a2l([1, 2, 3, 4, 5]) },

  { input: [null, 0], output: null },
]);

const cleanCases = makeTestCases<Input, Output>([
  //
  { input: [a2l([1, 2, 3, 4, 5]), 2], output: a2l([1, 2, 3, 5]) },

  { input: [a2l([1, 2, 3, 4, 5]), 5], output: a2l([2, 3, 4, 5]) },
  { input: [a2l([1, 2, 3, 4, 5]), 1], output: a2l([1, 2, 3, 4]) },

  { input: [null, -1], output: null },
]);

// * ------------------------------------------------

import { removeNthFromEnd as supportUnsafeInput } from './solution-check-input';
testRunner(dirtyCases, supportUnsafeInput);

import { removeNthFromEnd } from './solution';
testRunner(cleanCases, removeNthFromEnd);
