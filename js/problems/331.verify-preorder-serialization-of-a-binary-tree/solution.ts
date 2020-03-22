/*
 * @lc app=leetcode id=331 lang=javascript
 *
 * [331] Verify Preorder Serialization of a Binary Tree
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
const isValidSerialization = (preorder: string): boolean => {
  // * ['48 ms', '94.03 %', '34.9 MB', '100 %']

  // * https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/solution/yan-zheng-er-cha-shu-de-qian-xu-xu-lie-hua-by-leet/

  let slot = 1;
  let prev = '';

  for (let i = 0; i < preorder.length; i++) {
    const e = preorder[i];

    if (e === ',') slot += prev === '#' ? -1 : 1;

    if (slot <= 0) return false;

    prev = e;
  }

  slot += prev === '#' ? -1 : 1;

  return slot === 0;
};
// @lc code=end

export { isValidSerialization };
