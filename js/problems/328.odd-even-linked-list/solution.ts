/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
 * @return {ListNode}
 */
const oddEvenList = (head: MaybeList): MaybeList => {
  // * ['64 ms', '83.74 %', '36.2 MB', '100 %']

  if (head === null) return head;

  const dummy = { next: null } as ListNode;

  let p1: ListNode = head;
  let p2: MaybeList = dummy;

  while (p1.next !== null && p1.next.next !== null) {
    p2 = p2.next = p1.next;
    p1 = p1.next = p1.next!.next;
  }

  if (p1.next !== null) p2 = p2.next = p1.next;

  p2.next = null;
  p1.next = dummy.next;

  return head;
};
// @lc code=end

export { oddEvenList };
