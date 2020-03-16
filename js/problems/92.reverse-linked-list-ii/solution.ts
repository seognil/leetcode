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
  // * ['48 ms', '95.02 %', '33.7 MB', '57.14 %']

  if (m === n) return head;

  const dummy = { next: null } as ListNode;
  dummy.next = head;

  let cur: MaybeList = dummy;

  for (let i = 1; i < m; i++) cur = cur.next!;

  const subBefore = cur;
  const subEnd = cur.next!;
  cur = cur.next!;

  let dummy2 = { next: null } as ListNode;

  for (let i = m; i <= n; i++) {
    const next: MaybeList = cur!.next;

    const rNext = dummy2.next;
    dummy2.next = cur;
    cur!.next = rNext;

    cur = next;
  }

  subBefore.next = dummy2.next;
  subEnd.next = cur;

  return dummy.next;
};

// @lc code=end

export { reverseBetween };
