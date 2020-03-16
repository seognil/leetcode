/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

type MaybeList = ListNode | null;

interface ListNode {
  val: number;
  next: MaybeList;
}

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = (head: ListNode, m: number, n: number): ListNode => {
  // * ['52 ms', '80.1 %', '33.7 MB', '85.71 %']

  if (m === n) return head;

  const fromMiddle = m !== 1;

  let cur: ListNode = head;
  let subBefore: ListNode;
  let subEnd: ListNode;

  if (fromMiddle) {
    for (let i = 1; i < m - 1; i++) cur = cur.next!;
    subBefore = cur;
    cur = cur.next!;
  }

  subEnd = cur;

  let prev: MaybeList = null;
  let next: MaybeList = null;

  for (let i = m; i <= n; i++) {
    next = cur.next!;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  if (fromMiddle) subBefore!.next = prev;
  subEnd.next = next;

  return fromMiddle ? head : prev!;
};

// @lc code=end

export { reverseBetween };
