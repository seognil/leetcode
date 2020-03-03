'use strict';
/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */
Object.defineProperty(exports, '__esModule', { value: true });
const history = {};
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
  // * dp ['68 ms', '97.17 %', '35.8 MB', '100 %']
  const sqrtN = Math.pow(n, 0.5);
  const intSqrtN = Math.floor(sqrtN);
  // * for just square number
  if (sqrtN == intSqrtN) return 1;
  // * ---------------- rest cases
  let restMin = Infinity;
  for (let i = intSqrtN; i > 0; i--) {
    const rest = n - Math.pow(i, 2);
    if (!history[rest]) history[rest] = numSquares(rest);
    restMin = Math.min(restMin, history[rest]);
  }
  // * for add-ups
  return restMin + 1;
};
exports.numSquares = numSquares;
