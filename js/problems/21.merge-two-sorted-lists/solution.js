'use strict';
/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  // * ['60 ms', '86.75 %', '35.5 MB', '79.49 %']
  const head = { val: 0, next: null };
  let cur = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  // * one list clear, one list remaining
  cur.next = l1 || l2;
  return head.next;
};
exports.mergeTwoLists = mergeTwoLists;
