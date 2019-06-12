/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0;

  const subway = (node) => {
    if (node === null) return;

    const { left: l, val: m, right: r } = node;
    if (m === sum) count += 1;
    const remain = sum - m;

    subway(l);
    subway(r);

    subwayPart(l, remain);
    subwayPart(r, remain);
  };

  const subwayPart = (node, remain) => {
    if (node === null) return;
    const { left: l, val: m, right: r } = node;
    remain -= m;
    if (0 === remain) count += 1;
    subwayPart(l, remain);
    subwayPart(r, remain);
  };

  subway(root, sum);

  return count;
};
