/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // TODO, it's brute, try Manacher  // seognil LC 2019/06/08
  if (!s.length) return '';
  let max = s[0];
  for (let i = 0; i < s.length; i++) {
    for (let even = 0; even < 2; even++) {
      let j = i,
        k = i + even;
      while (j >= 0 && s[j] == s[k]) {
        j--, k++;
      }
      if (k - j - 1 > max.length) max = s.substring(j + 1, k);
    }
  }

  return max;
};
