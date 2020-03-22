'use strict';
/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  // * ['64 ms', '94.8 %', '35.8 MB', '33.33 %']
  // * find interger sqrt
  // * Newton's method
  if (x < 2) return x;
  let cur = x;
  while (true) {
    const next = (cur + x / cur) / 2;
    if (Math.abs(next - cur) < 1e-6) break;
    cur = next;
  }
  return Math.floor(cur);
};
exports.mySqrt = mySqrt;
