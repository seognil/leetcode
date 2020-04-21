/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = (node: ListNode): void => {
  // * ['56 ms', '94.09 %', '35.6 MB', '58.33 %']

  node.val = node.next!.val;
  node.next = node.next!.next;
};
// @lc code=end

export { deleteNode };
