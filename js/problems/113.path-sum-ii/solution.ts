/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 */

// @lc code=start

type TreeNode = {
  val: number;
  left: MaybeTreeNode;
  right: MaybeTreeNode;
};

type MaybeTreeNode = TreeNode | null;

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = (root: MaybeTreeNode, sum: number): number[][] => {
  // * ['72 ms', '89.63 %', '38.1 MB', '54.62 %']

  if (root === null) return [];

  const { left: L, val, right: R } = root;
  sum -= val;

  if (L === null && R === null && sum === 0) return [[val]];

  const resLeft = pathSum(L, sum);
  const resRight = pathSum(R, sum);

  resLeft.forEach((res) => res.unshift(val));
  resRight.forEach((res) => res.unshift(val));

  return [...resLeft, ...resRight];
};
// @lc code=end

export { pathSum };
