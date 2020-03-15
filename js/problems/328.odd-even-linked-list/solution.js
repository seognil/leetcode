'use strict';
/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = (head) => {
  // * ['64 ms', '83.74 %', '36.2 MB', '100 %']
  if (head === null) return head;
  const root2 = { val: 0, next: null };
  let p1 = head;
  let p2 = root2;
  while (p1.next !== null && p1.next.next !== null) {
    p2 = p2.next = p1.next;
    p1 = p1.next = p1.next.next;
  }
  if (p1.next !== null) p2 = p2.next = p1.next;
  p2.next = null;
  p1.next = root2.next;
  return head;
};
exports.oddEvenList = oddEvenList;
