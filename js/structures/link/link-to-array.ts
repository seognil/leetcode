import { LinkNode } from './link-node';
type val = any;

type ArrayList = val[];

export const linkToArray = (link: LinkNode | null): ArrayList => {
  const arr = [];

  let cur = link;
  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }

  return arr;
};

export const arrayToLink = (arr: ArrayList): LinkNode | null => {
  const head = new LinkNode(null);

  let cur = head;
  arr.forEach((e) => {
    cur.next = new LinkNode(e);
    cur = cur.next;
  });

  return head.next;
};
