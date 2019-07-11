/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => b - a);
  s = s.sort((a, b) => b - a);

  let i = g.length - 1,
    j = s.length - 1;

  let count = 0;

  while (i >= 0 && j >= 0) {
    if (s[j] >= g[i]) {
      count += 1;
      j--;
      i--;
    } else {
      j--;
    }
  }
  return count;
};
