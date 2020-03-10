/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
const reverseList = (head: ListNode | null): ListNode | null => {
  // * ['48 ms', '98.66 %', '34.9 MB', '73.91 %']

  // * null    cur  -> next -> ...
  // * prev    cur     next
  // * prev <- cur     next
  // *         prev    cur   next

  let cur = head;
  let prev: ListNode | null = null;
  let next: ListNode | null;

  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};
// @lc code=end

export { reverseList };
