/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

class Node {
  constructor(public val = 0, public neighbors: Node[] = []) {}
}

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = (node: Node | null): Node | null => {
  // * ['60 ms', '80.17 %', '35.5 MB', '100 %']

  if (node === null) return null;

  type val = number;
  const pool: Record<val, Node> = {};
  const queue: Node[] = [node];

  while (queue.length) {
    const node = queue.pop()!;

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
// @lc code=end

export { cloneGraph, Node };
