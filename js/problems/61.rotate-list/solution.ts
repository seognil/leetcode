/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head: MaybeList, k: number): MaybeList => {
  // * ['56 ms', '97.98 %', '35.7 MB', '100 %']

  if (head === null || head.next === null) return head;

  let ahead: ListNode = head;
  let behind: ListNode = head;

  let len = 0;

  while (k > 0) {
    k--;
    len++;
    if (ahead.next !== null) {
      ahead = ahead.next;
    } else {
      ahead = head;

      // * skip some loop, remain less k walking, and len is useless now
      k = k % len;
    }
  }

  if (ahead === behind) return head;

  while (ahead.next) {
    ahead = ahead.next;
    behind = behind.next!;
  }

  const newEnd = behind;
  const newHead = behind.next;
  const end = ahead;

  end.next = head;
  newEnd.next = null;

  return newHead;
};
// @lc code=end

export { rotateRight };
