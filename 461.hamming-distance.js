/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  x = x ^ y;
  let count = 0;
  while (x) {
    x % 2 && count++;
    x >>= 1;
  }
  return count;
};
