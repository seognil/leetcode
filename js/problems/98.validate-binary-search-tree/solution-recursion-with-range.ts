/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
 */

type MaybeTreeNode = TreeNode | null;

type TreeNode = {
  val: number;
  left: MaybeTreeNode;
  right: MaybeTreeNode;
};

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = (root: MaybeTreeNode): boolean => {
  // * ['60 ms', '89.11 %', '37.3 MB', '76.92 %']

  return isBstExt(root, -Infinity, Infinity);
};

const isBstExt = (root: MaybeTreeNode, min: number, max: number): boolean => {
  if (root === null) return true;

  const mid = root.val;

  if (mid <= min || max <= mid) return false;

  return isBstExt(root.left, min, mid) && isBstExt(root.right, mid, max);
};

// @lc code=end

export { isValidBST };
