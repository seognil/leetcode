import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

const a2l = arrayToList;

type MaybeList = ListNode | null;

interface ListNode {
  val: number;
  next: MaybeList;
}

type Solution = (node: ListNode) => void;

const myTestRunner = (fn: Solution) => {
  test('case 1', () => {
    const list = a2l([4, 5, 1, 9]);
    const result = a2l([4, 1, 9]);
    const node = list!.next!;

    deleteNode(node);
    expect(list).toEqual(result);
  });

  test('case 2', () => {
    const list = a2l([4, 5, 1, 9]);
    const result = a2l([4, 5, 9]);
    const node = list!.next!.next!;

    deleteNode(node);
    expect(list).toEqual(result);
  });
};

// * ------------------------------------------------

import { deleteNode } from './solution';
myTestRunner(deleteNode);
