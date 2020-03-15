'use strict';
/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  // * ['60 ms', '99.36 %', '36.9 MB', '62.5 %']
  if (head === null) return head;
  const root = { val: 0, next: head };
  let cur = root;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return root.next;
};
exports.removeElements = removeElements;
