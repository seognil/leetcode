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
  // * ['72 ms', '92.19 %', '42.7 MB', '6.25 %']

  if (root === null) return null;

  const queue: TreeNode[] = [root];
  let cur: TreeNode | null = null;
  while (queue.length) {
    cur = queue.shift()!;

    if (cur.val === val) return cur;

    cur.left && queue.push(cur.left);
    cur.right && queue.push(cur.right);
  }

  return null;
};
// @lc code=end

export { searchBST };
