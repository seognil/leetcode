import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type MaybeList = ListNode | null;
type Input = MaybeList;
type Output = MaybeList;

const makeCase = (arr: number[], pos: number) => {
  const node = arrayToList(arr);

  if (pos === -1) return { input: node, output: null };

  let last = node!;
  while (last.next !== null) last = last.next;

  let cycleBeginNode = node!;
  for (let i = 0; i < pos; i++) cycleBeginNode = cycleBeginNode.next!;

  last.next = cycleBeginNode;
  return {
    input: node,
    output: cycleBeginNode,
  };
};

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  makeCase([3, 2, 0, 4], 1),
  makeCase([1, 2], 0),
  makeCase([3, 2, 0, 4], 2),
  makeCase([3, 2, 0, 4], 3),
  makeCase([3, 2, 0, 4, 5], 2),
  makeCase([3, 2, 0, 4, 5], 3),

  makeCase([], -1),
  makeCase([1], -1),
  makeCase([1, 2], -1),
  makeCase([1, 2, 3], -1),
]);

// * ------------------------------------------------

import { detectCycle } from './solution';
testRunner(cases, detectCycle);
