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
  // * ['60 ms', '99.68 %', '37.9 MB', '77.5 %']

  const record = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    record[s.charCodeAt(i) - 97] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (record[s.charCodeAt(i) - 97] === 1) return i;
  }

  return -1;
};
// @lc code=end

export { firstUniqChar };
