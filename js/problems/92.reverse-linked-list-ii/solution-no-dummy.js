'use strict';
/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head, m, n) => {
  // * ['52 ms', '80.1 %', '33.7 MB', '85.71 %']
  if (m === n) return head;
  const fromMiddle = m !== 1;
  let cur = head;
  let subBefore;
  let subEnd;
  if (fromMiddle) {
    for (let i = 1; i < m - 1; i++) cur = cur.next;
    subBefore = cur;
    cur = cur.next;
  }
  subEnd = cur;
  let prev = null;
  let next = null;
  for (let i = m; i <= n; i++) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  if (fromMiddle) subBefore.next = prev;
  subEnd.next = next;
  return fromMiddle ? head : prev;
};
exports.reverseBetween = reverseBetween;
