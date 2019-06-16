/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;

  const subway = (node, remain) => {
    const l = node.left,
      r = node.right;
    remain -= node.val;
    if (l === null && r === null && remain === 0) return true;
    return (l && subway(l, remain)) || (r && subway(r, remain));
  };

  return !!subway(root, sum);
};
