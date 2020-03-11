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
  // * ['76 ms', '81.34 %', '42.2 MB', '6.25 %']
  if (root === null) return null;
  if (root.val === val) return root;
  return searchBST(root.left, val) || searchBST(root.right, val);
};
exports.searchBST = searchBST;
