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
  // * ['60 ms', '95.71 %', '35.8 MB', '93.88 %']

  const countA = new Array(26).fill(0);
  const countB = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    countA[s.charCodeAt(i) - 97] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    countB[t.charCodeAt(i) - 97] += 1;
  }

  return countA.every((e, i) => countB[i] === e);
};
// @lc code=end

export { isAnagram };
