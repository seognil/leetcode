import { ListNode } from './list-node';
type val = any;

type ArrayList = val[];

export const listToArray = (link: ListNode | null): ArrayList => {
  const arr = [];

  let cur = link;
  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }

  return arr;
};

export const arrayToList = (arr: ArrayList): ListNode | null => {
  const head = new ListNode(null);

  let cur = head;
  arr.forEach((e) => {
    cur.next = new ListNode(e);
    cur = cur.next;
  });

  return head.next;
};
