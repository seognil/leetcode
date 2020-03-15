/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
const hasCycle = (head: ListNode | null): boolean => {
  // * ['60 ms', '93.12 %', '36.3 MB', '100 %']

  if (head === null) return false;

  let slow = head;
  let fast = head;

  do {
    if (fast.next === null || fast.next.next === null) return false;

    slow = slow!.next!;
    fast = fast.next.next;
  } while (slow !== fast);

  return true;
};
// @lc code=end

export { hasCycle };
