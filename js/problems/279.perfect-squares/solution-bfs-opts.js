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
  // * bfs ['80 ms', '93.25 %', '38.2 MB', '12.5 %']
  // * inspired by: https://leetcode-cn.com/problems/perfect-squares/solution/javascript-bfsjie-fa-by-da-fei-kai/
  // * queue items is smaller than my previous solution
  // * but bfs memory usage is just not so good as dp way
  let queue = [n];
  const visited = new Set();
  let step = 1;
  while (queue.length) {
    const nextQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const n = queue[i];
      const sqrtN = Math.pow(n, 0.5);
      const intSqrtN = Math.floor(sqrtN);
      // * found
      if (sqrtN === intSqrtN) return step;
      for (let j = intSqrtN; j > 0; j--) {
        const rest = n - Math.pow(j, 2);
        if (!visited.has(rest)) {
          nextQueue.push(rest);
          visited.add(rest);
        }
      }
    }
    queue = nextQueue;
    step++;
  }
  // * really never touched
  return 0;
};
exports.numSquares = numSquares;
