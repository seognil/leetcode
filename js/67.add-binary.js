/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a === b && b === '') return '0';

  let sa = a.length,
    sb = b.length,
    l = Math.max(sa, sb);
  sa -= l;
  sb -= l;

  let result = [];

  let carry = 0;
  for (let i = l - 1; i >= 0; i--) {
    let s = ((a[sa + i] - 0) | 0) + ((b[sb + i] - 0) | 0) + carry;
    carry = s >> 1;
    result.unshift(s % 2);
  }
  if (carry) result.unshift(1);

  return result.join('');
};
