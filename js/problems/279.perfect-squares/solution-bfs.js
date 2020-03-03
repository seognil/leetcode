'use strict';
/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n) => {
  // * bfs ? ['92 ms', '90.63 %', '41.5 MB', '12.5 %']
  // * double memory usage, not good
  const queue = [[n, 1]];
  const visited = {};
  while (queue.length) {
    const [n, step] = queue.shift();
    const sqrtN = Math.pow(n, 0.5);
    const intSqrtN = Math.floor(sqrtN);
    // * found
    if (sqrtN === intSqrtN) return step;
    const nextStep = step + 1;
    for (let i = intSqrtN; i > 0; i--) {
      const rest = n - Math.pow(i, 2);
      if (!visited[rest]) {
        queue.push([rest, nextStep]);
        visited[rest] = true;
      }
    }
  }
  // * really never touched
  return 0;
};
exports.numSquares = numSquares;
