/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
 */

// @lc code=start

type TreeNode = {
  val: number;
  left: MaybeTreeNode;
  right: MaybeTreeNode;
};

type MaybeTreeNode = TreeNode | null;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root: MaybeTreeNode, sum: number): boolean => {
  // * ['60 ms', '95.32 %', '37.3 MB', '49.22 %']

  if (root === null) return false;

  const dfsSearch = (node: TreeNode, remain: number): boolean => {
    const { left: l, right: r, val: v } = node;

    remain -= v;

    if (l === null && r === null && remain === 0) return true;

    return (l !== null && dfsSearch(l, remain)) || (r !== null && dfsSearch(r, remain));
  };

  return dfsSearch(root, sum);
};
// @lc code=end

export { hasPathSum };
