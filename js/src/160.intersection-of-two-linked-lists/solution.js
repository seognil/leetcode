/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;

  let ia = headA,
    ib = headB;

  while (ia !== ib) {
    ia = ia === null ? headB : ia.next;
    ib = ib === null ? headA : ib.next;
  }

  return ia;
};
