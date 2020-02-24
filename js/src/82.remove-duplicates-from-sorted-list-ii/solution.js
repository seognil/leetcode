/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;

  let cur = head;
  head = { next: cur };
  let prev = head,
    dup = false;
  while (cur && cur.next) {
    while (cur.next && cur.next.val === cur.val) {
      dup = true;
      cur = cur.next;
    }

    cur = cur.next;

    if (dup) {
      prev.next = cur;
    } else {
      prev = prev.next;
    }

    dup = false;
  }

  return head.next;
};
