/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head: MaybeList, val: number): MaybeList => {
  // * ['60 ms', '99.36 %', '36.9 MB', '62.5 %']

  if (head === null) return head;

  const root: ListNode = { val: 0, next: head };

  let cur: MaybeList = root;

  while (cur.next) {
    if (cur!.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }

    cur = cur.next;
  }

  return root.next;
};
// @lc code=end

export { removeElements };
