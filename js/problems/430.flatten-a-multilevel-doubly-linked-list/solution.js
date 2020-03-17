'use strict';
/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head) => {
  // * ['48 ms', '96.35 %', '34.3 MB', '100 %']
  if (head === null) return head;
  flattenReturnEnd(head);
  return head;
};
exports.flatten = flatten;
const flattenReturnEnd = (head) => {
  let cur = { next: head };
  while (cur.next || cur.child) {
    if (cur.child) {
      const next = cur.next;
      const child = cur.child;
      const childEnd = flattenReturnEnd(cur.child);
      cur.child = null;
      cur.next = child;
      child.prev = cur;
      childEnd.next = next;
      if (next !== null) next.prev = childEnd;
      cur = childEnd;
    } else {
      cur = cur.next;
    }
  }
  return cur;
};
