import { LinkNode } from './link-node';
import { linkToArray, arrayToLink } from './link-to-array';

describe('', () => {
  const l1 = new LinkNode(7);
  const l2 = new LinkNode(11);
  const l3 = new LinkNode(13);
  const l4 = new LinkNode(17);
  const l5 = new LinkNode(23);

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
