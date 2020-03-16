/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
const swapPairs = (head: ListNode | null): ListNode | null => {
  // * ['52 ms', '80.94 %', '33.7 MB', '89.47 %']

  if (head === null) return null;

  const dummy = { next: head } as ListNode;

  let cur = dummy;

  while (cur.next && cur.next.next) {
    const n1 = cur.next!;
    const n2 = n1.next!;
    const n3 = n2.next;
    n1.next = n3;
    n2.next = n1;
    cur.next = n2;
    cur = n1;
  }

  return dummy.next;
};
// @lc code=end

export { swapPairs };
