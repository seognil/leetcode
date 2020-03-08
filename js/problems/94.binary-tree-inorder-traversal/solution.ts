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
  // * ['52 ms', '80.34 %', '33.7 MB', '87.5 %']

  const result: number[] = [];

  const dfsWalk = (node: TreeNode | null): void => {
    if (node === null) return;

    dfsWalk(node.left);
    result.push(node.val);
    dfsWalk(node.right);
  };

  dfsWalk(root);

  return result;
};
// @lc code=end

export { inorderTraversal };
