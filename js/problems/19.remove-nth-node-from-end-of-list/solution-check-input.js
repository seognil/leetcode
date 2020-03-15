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
  // * ['52 ms', '95.38 %', '34 MB', '81.82 %']
  if (head === null || n <= 0) return head;
  const root = { val: 0, next: head };
  let ahead = root;
  let behind = root;
  let count = 0;
  while (count < n) {
    // * list shorter than n
    if (ahead.next === null) return head;
    ahead = ahead.next;
    count++;
  }
  while (ahead.next) {
    ahead = ahead.next;
    behind = behind.next;
  }
  behind.next = behind.next.next;
  return root.next;
};
exports.removeNthFromEnd = removeNthFromEnd;
