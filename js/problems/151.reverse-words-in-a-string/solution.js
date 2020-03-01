'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  // * super easy js way
  // TODO try another method later // Seognil LC 2020/03/01
  return (
    s
      .split(' ')
      // * remove useless spaces
      .filter((e) => e)
      .reverse()
      .join(' ')
  );
};
exports.reverseWords = reverseWords;
