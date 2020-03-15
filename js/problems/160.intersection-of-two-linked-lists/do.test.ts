import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type MaybeList = ListNode | null;

type Input = [MaybeList, MaybeList];
type Output = MaybeList;

type ArrayList = number[];

const lastOf = (l: MaybeList): MaybeList => {
  if (l === null) return null;
  let cur = l;
  while (cur.next) cur = cur.next;
  return cur;
};

const makeCase = (arrA: ArrayList, arrB: ArrayList, val: number) => {
  const valid = arrA.includes(val) && arrB.includes(val);

  const frontA = valid ? arrA.slice(0, arrA.indexOf(val)) : arrA;
  const frontB = valid ? arrB.slice(0, arrA.indexOf(val)) : arrB;
  const common = valid ? arrA.slice(arrA.indexOf(val)) : [];

  const la = arrayToList(frontA);
  const lb = arrayToList(frontB);
  let lc = null;
  if (common.length) {
    lc = arrayToList(common);
    if (lastOf(la) !== null) lastOf(la)!.next = lc;
    if (lastOf(lb) !== null) lastOf(lb)!.next = lc;
  }

  return {
    input: [la, lb] as Input,
    output: lc as Output,
  };
};

const cases = makeTestCases<Input, Output>([
  //
  makeCase([4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5], 8),
  makeCase([0, 9, 1, 2, 4], [3, 2, 4], 2),
  makeCase([2, 6, 4], [1, 5], 0),

  makeCase([2, 6, 4], [], 0),

  makeCase(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 99, 1, 2, 3],
    [7, 6, 5, 4, 3, 2, 1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1, 99, 1, 2, 3],
    99,
  ),
]);

// * ------------------------------------------------

import { getIntersectionNode } from './solution';
testRunner(cases, getIntersectionNode);
