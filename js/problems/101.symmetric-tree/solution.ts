/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
const isSymmetric = (root: MaybeTreeNode): boolean => {
  // * ['52 ms', '96.66 %', '35.8 MB', '30 %']

  if (root === null) return true;
  return isMirror(root.left, root.right);
};

const isMirror = (l: MaybeTreeNode, r: MaybeTreeNode): boolean => {
  if (l === null && r === null) return true;
  if (!(l !== null && r !== null)) return false;
  return l.val === r.val && isMirror(l.left, r.right) && isMirror(l.right, r.left);
};

// @lc code=end

export { isSymmetric };
