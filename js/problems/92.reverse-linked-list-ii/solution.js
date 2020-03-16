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
  // * ['48 ms', '95.02 %', '33.7 MB', '57.14 %']
  if (m === n) return head;
  const dummy = { next: null };
  dummy.next = head;
  let cur = dummy;
  for (let i = 1; i < m; i++) cur = cur.next;
  const subBefore = cur;
  const subEnd = cur.next;
  cur = cur.next;
  let dummy2 = { next: null };
  for (let i = m; i <= n; i++) {
    const next = cur.next;
    const rNext = dummy2.next;
    dummy2.next = cur;
    cur.next = rNext;
    cur = next;
  }
  subBefore.next = dummy2.next;
  subEnd.next = cur;
  return dummy.next;
};
exports.reverseBetween = reverseBetween;
