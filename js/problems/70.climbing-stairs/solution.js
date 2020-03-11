'use strict';
/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  // * '52 ms', '72.67 %', '33.7 MB', '92 %']
  if (n < 3) return n;
  if (!history[n]) history[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return history[n];
};
exports.climbStairs = climbStairs;
const history = {};
