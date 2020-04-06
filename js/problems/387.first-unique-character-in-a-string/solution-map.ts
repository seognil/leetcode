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
  const record = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    record.set(char, (record.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (record.get(char) === 1) return i;
  }

  return -1;
};
// @lc code=end

export { firstUniqChar };
