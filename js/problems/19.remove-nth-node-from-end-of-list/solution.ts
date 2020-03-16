/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head: MaybeList, n: number): MaybeList => {
  // * ['48 ms', '98.59 %', '34.1 MB', '68.18 %']

  if (head === null) return head;

  const dummy = { next: head } as ListNode;

  let ahead: MaybeList = dummy;
  let behind: MaybeList = dummy;

  let count = 0;
  while (count < n) {
    ahead = ahead.next!;
    count++;
  }

  while (ahead.next) {
    ahead = ahead.next;
    behind = behind.next!;
  }

  behind.next = behind.next!.next;

  return dummy.next;
};
// @lc code=end

export { removeNthFromEnd };
