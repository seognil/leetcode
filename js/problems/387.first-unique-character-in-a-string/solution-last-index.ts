/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s: string): number => {
  // * ['80 ms', '93.22 %', '37.9 MB', '77.5 %']

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }

  return -1;
};
// @lc code=end

export { firstUniqChar };
