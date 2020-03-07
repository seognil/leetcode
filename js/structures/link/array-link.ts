type val = any;

export type LinkNode = {
  val: val;
  next: LinkNode | null;
};

type ArrayList = val[];

export const arrayToLink = (arr: ArrayList): LinkNode | null => {
  const head: LinkNode = { val: null, next: null };

  let cur = head;
  arr.forEach((e) => {
    cur.next = { val: e, next: null };
    cur = cur.next;
  });

  return head.next;
};

export const linkToArray = (link: LinkNode | null): ArrayList => {
  const arr = [];

  let cur = link;
  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }

  return arr;
};
