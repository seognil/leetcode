/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
const isPalindrome = (head: MaybeList): boolean => {
  // * ['56 ms', '94.77 %', '39.1 MB', '100 %']

  if (head === null || head.next === null) return true;

  // * find half node
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // * reverse second half part of list
  let p1: MaybeList = head;
  let p2: MaybeList = reverseList(slow.next!);

  // * mark for restore data mutation
  const halfRoot = slow;
  const halfHead = p2;

  // * checking
  while (p2 && p1) {
    if (p1.val !== p2.val) return false;
    p1 = p1.next;
    p2 = p2.next;
  }

  // * restore our mutation
  halfRoot.next = reverseList(halfHead);

  return true;
};

// * leetcode 206
const reverseList = (head: MaybeList): MaybeList => {
  let cur = head;
  let prev = null;
  let next;
  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

// @lc code=end

export { isPalindrome };
