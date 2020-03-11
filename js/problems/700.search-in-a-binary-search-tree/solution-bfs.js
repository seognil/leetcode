'use strict';
/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root, val) => {
  // * ['72 ms', '92.19 %', '42.7 MB', '6.25 %']
  if (root === null) return null;
  const queue = [root];
  let cur = null;
  while (queue.length) {
    cur = queue.shift();
    if (cur.val === val) return cur;
    cur.left && queue.push(cur.left);
    cur.right && queue.push(cur.right);
  }
  return null;
};
exports.searchBST = searchBST;
