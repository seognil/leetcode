import { LinkNode, linkToArray, arrayToLink } from './array-link';

describe('', () => {
  const l1: LinkNode = { val: 7, next: null };
  const l2: LinkNode = { val: 11, next: null };
  const l3: LinkNode = { val: 13, next: null };
  const l4: LinkNode = { val: 17, next: null };
  const l5: LinkNode = { val: 23, next: null };

  l1.next = l2;
  l2.next = l3;
  l3.next = l4;
  l4.next = l5;

  const arr = [7, 11, 13, 17, 23];

  test('linkToArray', () => {
    expect(linkToArray(l1)).toEqual(arr);
  });
  test('linkToArray null', () => {
    expect(linkToArray(null)).toEqual([]);
  });

  test('arrayToLink', () => {
    expect(arrayToLink(arr)).toEqual(l1);
  });
  test('arrayToLink null', () => {
    expect(arrayToLink([])).toEqual(null);
  });
});
