'use strict';
/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // * ['48 ms', '98.59 %', '34.1 MB', '68.18 %']
  if (head === null) return head;
  const dummy = { next: head };
  let ahead = dummy;
  let behind = dummy;
  let count = 0;
  while (count < n) {
    ahead = ahead.next;
    count++;
  }
  while (ahead.next) {
    ahead = ahead.next;
    behind = behind.next;
  }
  behind.next = behind.next.next;
  return dummy.next;
};
exports.removeNthFromEnd = removeNthFromEnd;
