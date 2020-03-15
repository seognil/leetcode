import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = ListNode | null;
type Output = boolean;

const makeList = (arr: number[], pos: number) => {
  const node = arrayToList(arr);
  if (pos === -1) return node;

  let last = node!;
  while (last.next !== null) last = last.next;

  let cycleBeginNode = node!;
  for (let i = 0; i < pos; i++) cycleBeginNode = cycleBeginNode.next!;

  last.next = cycleBeginNode;
  return node;
};

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  { input: makeList([3, 2, 0, 4], 1), output: true },
  { input: makeList([1, 2], 0), output: true },

  { input: makeList([], -1), output: false },
  { input: makeList([1], -1), output: false },
  { input: makeList([1, 2], -1), output: false },
  { input: makeList([1, 2, 3], -1), output: false },
]);

// * ------------------------------------------------

import { hasCycle } from './solution';
testRunner(cases, hasCycle);
