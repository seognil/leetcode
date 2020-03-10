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

interface ListNode {
  val: number;
  next: ListNode | null;
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
  let subRoot: ListNode;
  let subEnd: ListNode;

  if (fromMiddle) {
    for (let i = 1; i < m - 1; i++) cur = cur.next!;
    subRoot = cur;
    cur = cur.next!;
  }

  subEnd = cur;

  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  for (let i = m; i <= n; i++) {
    next = cur.next!;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  if (fromMiddle) subRoot!.next = prev;
  subEnd.next = next;

  return fromMiddle ? head : prev!;
};

// @lc code=end

export { reverseBetween };
