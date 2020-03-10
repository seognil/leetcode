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
  // * ['48 ms', '95.02 %', '33.7 MB', '57.14 %']

  if (m === n) return head;

  const root: ListNode = { val: 0, next: null };
  root.next = head;

  let cur: ListNode | null = root;

  for (let i = 1; i < m; i++) {
    cur = cur.next!;
  }

  let subRoot = cur;
  cur = cur.next!;
  const subEnd = cur;

  let root2: ListNode = { val: 0, next: null };

  for (let i = m; i <= n; i++) {
    const next: ListNode | null = cur!.next;

    const rNext = root2.next;
    root2.next = cur;
    cur!.next = rNext;

    cur = next;
  }

  subRoot.next = root2.next;
  subEnd.next = cur;

  return root.next;
};

// @lc code=end

export { reverseBetween };
