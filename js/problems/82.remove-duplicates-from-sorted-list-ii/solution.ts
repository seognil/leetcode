/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
  // * ['60 ms', '91.86 %', '35.7 MB', '83.87 %']

  if (head === null) return head;

  const root: ListNode = { val: NaN, next: head };

  let prev: ListNode = root;
  let cur: MaybeListNode = head;
  let dup = false;

  while (cur && cur.next) {
    if (cur.next.val === cur.val) dup = true;
    while (cur.next && cur.next.val === cur.val) cur = cur.next;

    cur = cur.next;

    if (dup) {
      prev.next = cur;
    } else {
      prev = prev.next!;
    }

    dup = false;
  }

  return root.next;
};
// @lc code=end

export { deleteDuplicates };
