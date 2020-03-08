'use strict';
/*
 * @lc app=leetcode id=542 lang=javascript
 *
 * [542] 01 Matrix
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = (matrix) => {
  // * ['200 ms', '60.76 %', '64.4 MB', '100 %']
  // * https://medium.com/@silasburger/01-matrix-leetcode-javascript-walkthrough-3747f894092c
  // * bfs, boundary check looping
  // * ---------------- failed cases, change nothing
  if (matrix.length < 1 || matrix[0].length < 1) return matrix;
  // * ---------------- preparation
  const maxR = matrix.length;
  const maxC = matrix[0].length;
  // * ---------------- initialize
  let checkList = [];
  for (let r = 0; r < maxR; r++) {
    for (let c = 0; c < maxC; c++) {
      const e = matrix[r][c];
      if (e === 0) {
        checkList.push([r, c]);
      } else {
        // * set 1 to Infinity as the mark of unvisited
        matrix[r][c] = Infinity;
      }
    }
  }
  // * ---------------- bfs
  let depthValue = 1;
  while (checkList.length) {
    const nextCheckList = [];
    checkList.forEach(([x, y]) => {
      [
        [x + 1, y],
        [x - 1, y],
        [x, y + 1],
        [x, y - 1],
      ].forEach(([r, c]) => {
        const inRange = 0 <= r && r < maxR && 0 <= c && c < maxC;
        if (inRange && matrix[r][c] === Infinity) {
          matrix[r][c] = depthValue;
          nextCheckList.push([r, c]);
        }
      });
    });
    checkList = nextCheckList;
    depthValue++;
  }
  // * ---------------- return
  return matrix;
};
exports.updateMatrix = updateMatrix;
