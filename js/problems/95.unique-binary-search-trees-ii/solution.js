'use strict';
/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */
Object.defineProperty(exports, '__esModule', { value: true });
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
exports.TreeNode = TreeNode;
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = (n) => {
  // * ['72 ms', '79.12 %', '37.9 MB', '66.67 %']
  if (n == 0) return [];
  const fullArr = Array.from({ length: n }, (e, i) => i + 1);
  const genTrees = (arr, a, b) => {
    if (a > b) return [null];
    if (a == b) return [new TreeNode(arr[a])];
    const result = [];
    for (let j = a; j <= b; j++) {
      const mid = arr[j];
      const lefts = genTrees(arr, a, j - 1);
      const rights = genTrees(arr, j + 1, b);
      for (const l of lefts) {
        for (const r of rights) {
          result.push(new TreeNode(mid, l, r));
        }
      }
    }
    return result;
  };
  return genTrees(fullArr, 0, n - 1);
};
exports.generateTrees = generateTrees;
