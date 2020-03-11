'use strict';
/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  // * ['52 ms', '93.37 %', '33.9 MB', '52.94 %']
  // * n is integer
  if (n === 0) return 1;
  return n < 0 ? 1 / p(x, -n, 1) : p(x, n, 1);
};
exports.myPow = myPow;
const p = (x, n, rest) => {
  if (n === 1) return x * rest;
  return n % 2 === 0 ? p(x * x, n / 2, rest) : p(x * x, (n - 1) / 2, rest * x);
};
