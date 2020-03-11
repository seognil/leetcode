'use strict';
/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
  // * ['56 ms', '93.09 %', '37.2 MB', '28.13 %']
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
exports.maxDepth = maxDepth;
