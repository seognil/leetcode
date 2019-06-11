/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  const subway = (node, carry = 0) => {
    if (node === null) return 0;

    const r = subway(node.right, carry),
      m = node.val,
      l = subway(node.left, carry + m + r);

    node.val += carry + r;

    return r + m + l;
  };

  subway(root);

  return root;
};
