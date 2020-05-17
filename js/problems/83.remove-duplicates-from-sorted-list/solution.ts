/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start

type ListNode = {
  val: number;
  next: MaybeListNode;
};

type MaybeListNode = ListNode | null;

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head: MaybeListNode): MaybeListNode => {
  // * ['68 ms', '80.78 %', '35.7 MB', '50.13 %']

  if (head === null) return head;

  let cur = head;
  while (cur.next) {
    if (cur.next.val === cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
};
// @lc code=end

export { deleteDuplicates };
