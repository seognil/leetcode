/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s: string): boolean => {
  // * ['64 ms', '91.3 %', '38.3 MB', '39.13 %']

  const k = s.replace(/\W/g, '').toLowerCase();

  return k.split('').reverse().join('') === k;
};
// @lc code=end

export { isPalindrome };
