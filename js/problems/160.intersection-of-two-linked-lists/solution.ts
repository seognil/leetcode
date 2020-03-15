/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

interface ListNode {
  val: number;
  next: MaybeList;
}

type MaybeList = ListNode | null;

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA: MaybeList, headB: MaybeList): MaybeList => {
  // * ['80 ms', '89.7 %', '42.6 MB', '100 %']

  if (headA === null || headB === null) return null;

  let p1: MaybeList = headA;
  let p2: MaybeList = headB;

  while (p1 !== p2) {
    p1 = p1 === null ? headB : p1.next;
    p2 = p2 === null ? headA : p2.next;
  }

  return p1;
};
// @lc code=end

export { getIntersectionNode };
