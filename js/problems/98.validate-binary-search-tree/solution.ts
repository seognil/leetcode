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
  // * ['56 ms', '96.7 %', '37.2 MB', '97.44 %']

  const stack: TreeNode[] = [];

  let lastVal = -Infinity;

  let head = root;
  while (head !== null || stack.length > 0) {
    while (head !== null) {
      stack.push(head);
      head = head.left;
    }

    head = stack.pop()!;

    if (lastVal >= head.val) return false;

    lastVal = head.val;
    head = head.right;
  }

  return true;
};

// @lc code=end

export { isValidBST };
