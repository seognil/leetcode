'use strict';
/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
  // * simple recursive ['52 ms', '80.34 %', '33.9 MB', '21.88 %']
  const loop = (root) => {
    if (root === null) return [];
    return [...loop(root.left), root.val, ...loop(root.right)];
  };
  return loop(root);
};
exports.inorderTraversal = inorderTraversal;
