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
  let cur = head;
  while (cur.next) {
    cur.next.prev = cur;
    cur.child = null;
    cur = cur.next;
  }
  return head;
};
exports.flatten = flatten;
const flattenReturnEnd = (head) => {
  let cur = { next: head };
  while (cur.next || cur.child) {
    if (cur.child) {
      const subEnd = flattenReturnEnd(cur.child);
      subEnd.next = cur.next;
      cur.next = cur.child;
      cur.child = null;
      cur = subEnd;
    } else {
      cur = cur.next;
    }
  }
  return cur;
};
