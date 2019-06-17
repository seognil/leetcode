/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];

  const s1 = strs[0],
    lenMax = s1.length,
    lenComp = strs.length,
    result = [];

  for (let i = 0; i < lenMax; i++) {
    const e = s1[i];
    for (let j = 1; j < lenComp; j++) {
      if (strs[j][i] !== e) return result.join('');
    }
    result.push(e);
  }

  return result.join('');
};
