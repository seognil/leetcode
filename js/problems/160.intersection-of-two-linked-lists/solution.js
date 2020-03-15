'use strict';
/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  // * ['80 ms', '89.7 %', '42.6 MB', '100 %']
  if (headA === null || headB === null) return null;
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }
  return p1;
};
exports.getIntersectionNode = getIntersectionNode;
