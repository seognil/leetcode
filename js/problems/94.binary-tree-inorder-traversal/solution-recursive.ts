/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
const inorderTraversal = (root: TreeNode | null): number[] => {
  // * simple recursive ['52 ms', '80.34 %', '33.9 MB', '21.88 %']
  const loop = (root: TreeNode | null): number[] => {
    if (root === null) return [];
    return [...loop(root.left), root.val, ...loop(root.right)];
  };

  return loop(root);
};
// @lc code=end

export { inorderTraversal };
