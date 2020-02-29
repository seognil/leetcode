/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length < 1) return '';
  if (strs.length === 1) return strs[0];

  const strCount = strs.length;
  const s1 = strs[0];

  for (let i = 0; i < s1.length; i++) {
    const e = s1[i];
    for (let j = 1; j < strCount; j++) {
      if (strs[j][i] !== e) return s1.slice(0, i);
    }
  }

  return s1;
};

export { longestCommonPrefix };
