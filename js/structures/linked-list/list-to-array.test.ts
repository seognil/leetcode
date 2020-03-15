import { ListNode } from './list-node';
import { listToArray, arrayToList } from './list-to-array';

describe('null', () => {
  test('linkToArray null', () => {
    expect(listToArray(null)).toEqual([]);
  });
  test('arrayToLink null', () => {
    expect(arrayToList([])).toEqual(null);
  });
});

describe('normal case', () => {
  const l1 = new ListNode(7);
  const l2 = new ListNode(11);
  const l3 = new ListNode(13);
  const l4 = new ListNode(17);
  const l5 = new ListNode(23);

  l1.next = l2;
  l2.next = l3;
  l3.next = l4;
  l4.next = l5;

  const arr = [7, 11, 13, 17, 23];

  test('linkToArray', () => {
    expect(listToArray(l1)).toEqual(arr);
  });

  test('arrayToLink', () => {
    expect(arrayToList(arr)).toEqual(l1);
  });
});
