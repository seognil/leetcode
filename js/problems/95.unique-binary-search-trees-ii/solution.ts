/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

class TreeNode<T = any> {
  constructor(
    public val: T,
    public left: TreeNode<T> | null = null,
    public right: TreeNode<T> | null = null,
  ) {}
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = (n: number): TreeNode[] => {
  // * ['72 ms', '79.12 %', '37.9 MB', '66.67 %']

  if (n == 0) return [];

  const fullArr: number[] = Array.from({ length: n }, (e, i) => i + 1);

  const genTrees = (arr: number[], a: number, b: number): (TreeNode | null)[] => {
    if (a > b) return [null];
    if (a == b) return [new TreeNode(arr[a])];

    const result: TreeNode[] = [];

    for (let j = a; j <= b; j++) {
      const mid = arr[j];
      const lefts = genTrees(arr, a, j - 1);
      const rights = genTrees(arr, j + 1, b);

      for (const l of lefts) {
        for (const r of rights) {
          result.push(new TreeNode(mid, l, r));
        }
      }
    }

    return result;
  };

  return genTrees(fullArr, 0, n - 1) as TreeNode[];
};
// @lc code=end

export { TreeNode, generateTrees };
