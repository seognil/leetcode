/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  return /^1(00)*$/.test(num.toString(2));
};
