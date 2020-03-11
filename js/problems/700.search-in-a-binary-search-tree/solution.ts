/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  // * ['76 ms', '81.34 %', '42.2 MB', '6.25 %']

  if (root === null) return null;

  if (root.val === val) return root;

  return searchBST(root.left, val) || searchBST(root.right, val);
};
// @lc code=end

export { searchBST };
