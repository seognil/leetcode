/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s: string, t: string): boolean => {
  // * ['104 ms', '31.74 %', '40.2 MB', '8.16 %']

  if (s.length === t.length) {
    return s.split('').sort().join() === t.split('').sort().join();
  } else {
    return false;
  }
};
// @lc code=end

export { isAnagram };
