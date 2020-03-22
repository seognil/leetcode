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
  // * ['68 ms', '88.05 %', '35.5 MB', '94.44 %']
  // * find interger sqrt
  // * Newton's method, mock int divide
  if (x < 2) return x;
  let cur = x;
  while (true) {
    const next = divide(cur + divide(x, cur), 2);
    if (next >= cur) break;
    cur = next;
  }
  return cur;
};
exports.mySqrt = mySqrt;
const divide = (x, y) => Math.floor(x / y);
