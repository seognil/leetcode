/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) return [];

  const { left: l, val: m, right: r } = root;

  sum -= m;

  if (l === null && r === null && sum === 0) return [[m]];
  const al = l && pathSum(l, sum),
    ar = r && pathSum(r, sum);

  al && al.forEach((a) => a.unshift(m));
  ar && ar.forEach((a) => a.unshift(m));

  return [...(al || []), ...(ar || [])];
};
