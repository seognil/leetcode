'use strict';
/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */
Object.defineProperty(exports, '__esModule', { value: true });
class Node {
  constructor(val = 0, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}
exports.Node = Node;
/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
  // * ['52 ms', '90.58 %', '35.7 MB', '100 %']
  if (head === null) return null;
  const map = new Map();
  let cur = head;
  const mirrorOf = (node) => {
    if (!map.has(node)) map.set(node, new Node(node.val));
    return map.get(node);
  };
  while (cur) {
    const newNode = mirrorOf(cur);
    if (cur.next) newNode.next = mirrorOf(cur.next);
    if (cur.random) newNode.random = mirrorOf(cur.random);
    cur = cur.next;
  }
  return map.get(head);
};
exports.copyRandomList = copyRandomList;
