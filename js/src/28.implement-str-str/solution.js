/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // TODO it's simple loop, use kmp // seognil LC 2019/06/08
  const lh = haystack.length,
    ln = needle.length;
  if (!ln) return 0;
  let k = -1;
  for (let i = 0; i <= lh - ln; i++) {
    if (haystack[i] == needle[0]) {
      k = i;
      for (let j = 1; j < ln; j++) {
        if (haystack[i + j] != needle[j]) {
          k = -1;
          break;
        }
      }
      if (k != -1) return k;
    }
  }
  return -1;
};
