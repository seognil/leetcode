'use strict';
/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  // * ['52 ms', '80.94 %', '33.7 MB', '89.47 %']
  if (head === null) return null;
  const root = { val: 0, next: head };
  let cur = root;
  while (cur.next && cur.next.next) {
    const n1 = cur.next;
    const n2 = n1.next;
    const n3 = n2.next;
    n1.next = n3;
    n2.next = n1;
    cur.next = n2;
    cur = n1;
  }
  return root.next;
};
exports.swapPairs = swapPairs;
