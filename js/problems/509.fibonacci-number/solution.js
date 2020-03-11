'use strict';
/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
const fib = (N) => {
  // * ['48 ms', '92.72 %', '33.8 MB', '100 %']
  if (N < 2) return N;
  if (!history[N]) history[N] = fib(N - 1) + fib(N - 2);
  return history[N];
};
exports.fib = fib;
const history = { 0: 0, 1: 1 };
