'use strict';
/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  // * ['60 ms', '95.65 %', '36.5 MB', '56.25 %']
  // * https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/113097/
  if (head === null) return null;
  let slow = head;
  let fast = head;
  do {
    if (fast.next === null || fast.next.next === null) return null;
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);
  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
};
exports.detectCycle = detectCycle;
