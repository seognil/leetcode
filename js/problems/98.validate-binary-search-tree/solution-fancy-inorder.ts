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
  // * ['208 ms', '5.46 %', '53 MB', '10.26 %']

  if (root === null) return true;

  return inOrder(root).every((e, i, a) => i === 0 || a[i - 1] < e);
};

const inOrder = (root: MaybeTreeNode): number[] => {
  if (root === null) return [];
  return [...inOrder(root.left), root.val, ...inOrder(root.right)];
};

// @lc code=end

export { isValidBST };
