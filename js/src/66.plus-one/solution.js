/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length,
    carry = 0;

  digits[len - 1] += 1;
  for (let i = len - 1; i >= 0; i--) {
    const e = digits[i];
    const sum = e + carry;
    carry = sum >= 10 ? 1 : 0;
    digits[i] = sum % 10;
  }

  carry && digits.unshift(1);

  return digits;
};
