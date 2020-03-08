'use strict';
/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
class Node {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}
exports.Node = Node;
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node) => {
  // * ['60 ms', '80.17 %', '35.5 MB', '100 %']
  if (node === null) return null;
  const pool = {};
  const queue = [node];
  while (queue.length) {
    const node = queue.pop();
    // * prepare, maybe already did in previous loop
    if (!pool[node.val]) {
      pool[node.val] = new Node(node.val, node.neighbors);
    }
    // * dfs walk, prepare
    node.neighbors.forEach((nbNode) => {
      if (!pool[nbNode.val]) {
        pool[nbNode.val] = new Node(nbNode.val);
        queue.push(nbNode);
      }
    });
    // * link neighbors
    pool[node.val].neighbors = node.neighbors.map((nbNode) => pool[nbNode.val]);
  }
  return pool[node.val];
};
exports.cloneGraph = cloneGraph;
