/*
 * @lc app=leetcode id=371 lang=javascript
 *
 * [371] Sum of Two Integers
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  let carry;
  while (b) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }

  return a;
};
