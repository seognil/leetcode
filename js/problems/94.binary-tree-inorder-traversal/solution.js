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
  // * ['52 ms', '80.34 %', '33.7 MB', '87.5 %']
  const result = [];
  const dfsWalk = (node) => {
    if (node === null) return;
    dfsWalk(node.left);
    result.push(node.val);
    dfsWalk(node.right);
  };
  dfsWalk(root);
  return result;
};
exports.inorderTraversal = inorderTraversal;
