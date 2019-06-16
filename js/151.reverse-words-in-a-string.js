/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // * super easy way
  return s
    .split(' ')
    .filter((e) => e)
    .reverse()
    .join(' ');
};
