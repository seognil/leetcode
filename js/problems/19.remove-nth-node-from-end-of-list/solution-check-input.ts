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
  // * ['52 ms', '95.38 %', '34 MB', '81.82 %']

  if (head === null || n <= 0) return head;

  const root: ListNode = { val: 0, next: head };

  let ahead: MaybeList = root;
  let behind: MaybeList = root;

  let count = 0;
  while (count < n) {
    // * list shorter than n
    if (ahead.next === null) return head;

    ahead = ahead.next;
    count++;
  }

  while (ahead.next) {
    ahead = ahead.next;
    behind = behind.next!;
  }

  behind.next = behind.next!.next;

  return root.next;
};
// @lc code=end

export { removeNthFromEnd };
