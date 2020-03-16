import { listToArray } from '../../structures/linked-list/list-to-array';
import { MyLinkedListContructor } from './types.d';

// @ts-ignore
const displayArr = (linkedList) => {
  // @ts-ignore
  let cur = linkedList.root || linkedList.head;
  let show = [cur.val];
  while (cur.next) {
    cur = cur.next;
    show.push(cur.val);
  }
  if (show[0] === 0) show = show.slice(1);
  // @ts-ignore
  console.log(linkedList.length, show);
};

// * ------------------------------------------------

const testRunnerRaw = (MyLinkedList: MyLinkedListContructor) => {
  test('return value', () => {
    const linkedList = new MyLinkedList();

    expect(linkedList.addAtHead(2)).toEqual(undefined);
    expect(linkedList.addAtIndex(0, 1)).toEqual(undefined);
    expect(linkedList.addAtTail(3)).toEqual(undefined);
    expect(linkedList.deleteAtIndex(2)).toEqual(undefined);
  });

  test('case empty', () => {
    const linkedList = new MyLinkedList();

    expect(linkedList.get(0)).toEqual(-1);
    expect(linkedList.get(-99)).toEqual(-1);
    expect(linkedList.get(99)).toEqual(-1);
  });

  test('add invalid', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtHead(66);
    linkedList.addAtHead(77);

    linkedList.addAtIndex(-1, 99);
    linkedList.addAtIndex(3, 99);

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(77);
    expect(linkedList.get(1)).toEqual(66);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('delete invalid', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtHead(66);
    linkedList.addAtHead(77);

    linkedList.deleteAtIndex(-1);
    linkedList.deleteAtIndex(2);

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(77);
    expect(linkedList.get(1)).toEqual(66);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('head', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtHead(66);
    linkedList.addAtHead(77);

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(77);
    expect(linkedList.get(1)).toEqual(66);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('tail', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtTail(22);
    linkedList.addAtTail(33);

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(22);
    expect(linkedList.get(1)).toEqual(33);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('addAtIndex as head', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtIndex(0, 66);
    linkedList.addAtIndex(0, 77);
    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(77);
    expect(linkedList.get(1)).toEqual(66);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('addAtIndex as tail', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtIndex(0, 66);
    linkedList.addAtIndex(1, 77);
    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(66);
    expect(linkedList.get(1)).toEqual(77);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('delete only one', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtHead(66);
    linkedList.deleteAtIndex(0);
    linkedList.addAtHead(66);
    linkedList.addAtTail(77);

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(66);
    expect(linkedList.get(1)).toEqual(77);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('delete, check head and tail', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtTail(22);
    linkedList.addAtTail(33);

    linkedList.deleteAtIndex(1);
    linkedList.addAtTail(44);
    linkedList.addAtTail(55);
    linkedList.deleteAtIndex(0);
    linkedList.addAtHead(66);
    linkedList.addAtHead(77);

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(77);
    expect(linkedList.get(1)).toEqual(66);
    expect(linkedList.get(2)).toEqual(44);
    expect(linkedList.get(3)).toEqual(55);
    expect(linkedList.get(4)).toEqual(-1);
  });

  // * ----------------------------------------------------------------

  test('leetcode case 1', () => {
    const linkedList = new MyLinkedList();

    // * ---------------- 1-2-3

    linkedList.addAtHead(1);
    linkedList.addAtTail(3);
    linkedList.addAtIndex(1, 2);

    expect(linkedList.get(0)).toEqual(1);
    expect(linkedList.get(1)).toEqual(2);
    expect(linkedList.get(2)).toEqual(3);
    expect(linkedList.get(3)).toEqual(-1);

    // * ---------------- 1-3

    linkedList.deleteAtIndex(1);

    expect(linkedList.get(0)).toEqual(1);
    expect(linkedList.get(1)).toEqual(3);
    expect(linkedList.get(2)).toEqual(-1);
  });

  test('leetcode case 2', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtHead(7);
    linkedList.addAtHead(2);
    linkedList.addAtHead(1);

    linkedList.addAtIndex(3, 0);

    linkedList.deleteAtIndex(2);

    linkedList.addAtHead(6);
    linkedList.addAtTail(4);

    // * ---------------- 61204

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(6);
    expect(linkedList.get(1)).toEqual(1);
    expect(linkedList.get(2)).toEqual(2);
    expect(linkedList.get(3)).toEqual(0);
    expect(linkedList.get(4)).toEqual(4);
    expect(linkedList.get(5)).toEqual(-1);

    // * ----------------

    linkedList.addAtHead(4);
    linkedList.addAtIndex(5, 0);
    linkedList.addAtHead(6);

    // * ---------------- 64612004

    expect(linkedList.get(-1)).toEqual(-1);
    expect(linkedList.get(0)).toEqual(6);
    expect(linkedList.get(1)).toEqual(4);
    expect(linkedList.get(2)).toEqual(6);
    expect(linkedList.get(3)).toEqual(1);
    expect(linkedList.get(4)).toEqual(2);
    expect(linkedList.get(5)).toEqual(0);
    expect(linkedList.get(6)).toEqual(0);
    expect(linkedList.get(7)).toEqual(4);
    expect(linkedList.get(8)).toEqual(-1);
  });

  test('leetcode case 3', () => {
    const linkedList = new MyLinkedList();

    linkedList.addAtHead(84);
    linkedList.addAtTail(2);
    linkedList.addAtTail(39);
    linkedList.get(3);
    linkedList.get(1);
    linkedList.addAtTail(42);
    linkedList.addAtIndex(1, 80);
    linkedList.addAtHead(14);
    linkedList.addAtHead(1);
    linkedList.addAtTail(53);
    linkedList.addAtTail(98);
    linkedList.addAtTail(19);
    linkedList.addAtTail(12);
    linkedList.get(2);
    linkedList.addAtHead(16);
    linkedList.addAtHead(33);
    linkedList.addAtIndex(4, 17);
    linkedList.addAtIndex(6, 8);
    linkedList.addAtHead(37);
    linkedList.addAtTail(43);
    linkedList.deleteAtIndex(11);
    linkedList.addAtHead(80);
    linkedList.addAtHead(31);
    linkedList.addAtIndex(13, 23);
    linkedList.addAtTail(17);
    linkedList.get(4);
    linkedList.addAtIndex(10, 0);
    linkedList.addAtTail(21);
    linkedList.addAtHead(73);
    linkedList.addAtHead(22);
    linkedList.addAtIndex(24, 37);
    linkedList.addAtTail(14);
    linkedList.addAtHead(97);
    linkedList.addAtHead(8);
    linkedList.get(6);
    linkedList.deleteAtIndex(17);
    linkedList.addAtTail(50);
    linkedList.addAtTail(28);
    linkedList.addAtHead(76);
    linkedList.addAtTail(79);
    linkedList.get(18);
    linkedList.deleteAtIndex(30);
    linkedList.addAtTail(5);
    linkedList.addAtHead(9);
    linkedList.addAtTail(83);
    linkedList.deleteAtIndex(3);
    linkedList.addAtTail(40);
    linkedList.deleteAtIndex(26);
    linkedList.addAtIndex(20, 90);
    linkedList.deleteAtIndex(30);
    linkedList.addAtTail(40);
    linkedList.addAtHead(56);
    linkedList.addAtIndex(15, 23);
    linkedList.addAtHead(51);
    linkedList.addAtHead(21);
    linkedList.get(26);
    linkedList.addAtHead(83);
    linkedList.get(30);
    linkedList.addAtHead(12);
    linkedList.deleteAtIndex(8);
    linkedList.get(4);
    linkedList.addAtHead(20);
    linkedList.addAtTail(45);
    linkedList.get(10);
    linkedList.addAtHead(56);
    linkedList.get(18);
    linkedList.addAtTail(33);
    linkedList.get(2);
    linkedList.addAtTail(70);
    linkedList.addAtHead(57);
    linkedList.addAtIndex(31, 24);
    linkedList.addAtIndex(16, 92);
    linkedList.addAtHead(40);
    linkedList.addAtHead(23);
    linkedList.deleteAtIndex(26);
    linkedList.get(1);
    linkedList.addAtHead(92);
    linkedList.addAtIndex(3, 78);
    linkedList.addAtTail(42);
    linkedList.get(18);
    linkedList.addAtIndex(39, 9);
    linkedList.get(13);
    linkedList.addAtIndex(33, 17);
    linkedList.get(51);
    linkedList.addAtIndex(18, 95);
    linkedList.addAtIndex(18, 33);
    linkedList.addAtHead(80);
    linkedList.addAtHead(21);
    linkedList.addAtTail(7);
    linkedList.addAtIndex(17, 46);
    linkedList.get(33);
    linkedList.addAtHead(60);
    linkedList.addAtTail(26);
    linkedList.addAtTail(4);
    linkedList.addAtHead(9);
    linkedList.get(45);
    linkedList.addAtTail(38);
    linkedList.addAtHead(95);
    linkedList.addAtTail(78);
    linkedList.get(54);
    linkedList.addAtIndex(42, 86);
  });
};

// * ------------------------------------------------

import { MyLinkedList as DoublyLinkedList } from './solution';
import { MyLinkedList as SinglyDummy } from './solution-singly-dummy';
import { MyLinkedList as SinglyHeadTail } from './solution-singly-head-tail';

describe('MyLinkedList doubly, more code but faster', () => {
  testRunnerRaw(DoublyLinkedList);
});

describe('MyLinkedList singly, simple but slow', () => {
  testRunnerRaw(SinglyDummy);
});

describe('MyLinkedList singly, not so good', () => {
  testRunnerRaw(SinglyHeadTail);
});
