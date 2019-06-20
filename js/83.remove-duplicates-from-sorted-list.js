/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
  while (cur.next) {
    if (cur.next.val === cur.val) cur.next = cur.next.next;
    else cur = cur.next;
  }

  return head;
};
