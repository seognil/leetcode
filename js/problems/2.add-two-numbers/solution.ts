/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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

class ListNode {
  public next: MaybeList = null;
  constructor(public val: number = 0) {}
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1: MaybeList, l2: MaybeList): MaybeList => {
  // * ['108 ms', '88.84 %', '38.5 MB', '44.44 %']

  const root = new ListNode();
  let cur = root;
  let carry = 0;

  while (l1 || l2) {
    const val1 = l1 !== null ? l1.val : 0;
    const val2 = l2 !== null ? l2.val : 0;
    const sum = val1 + val2 + carry;
    cur = cur.next = new ListNode(sum % 10);
    carry = sum >= 10 ? 1 : 0;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) cur.next = new ListNode(1);

  return root.next;
};
// @lc code=end

export { addTwoNumbers };
