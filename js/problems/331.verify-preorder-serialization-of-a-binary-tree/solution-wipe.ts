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
  // * ['52 ms', '88.06 %', '35.1 MB', '100 %']

  let str = preorder;

  while (/\d+,#,#/.test(str)) {
    str = str.replace(/\d+,#,#/g, '#');
  }

  return str === '#';
};
// @lc code=end

export { isValidSerialization };
