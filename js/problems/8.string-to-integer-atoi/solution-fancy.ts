/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str: string): number => {
  // * ['72 ms', '84.38 %', '36.1 MB', '57.14 %']

  const match = str.match(/^\s*[+-]?\d+/);

  if (match === null) return 0;

  const num = Number(match[0].replace(/\s/g, ''));
  return Math.max(1 << 31, Math.min(~(1 << 31), num));
};
// @lc code=end

export { myAtoi };
