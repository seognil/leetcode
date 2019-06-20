/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(' ')
    .filter((e) => e)
    .map((e) =>
      e
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');
};
