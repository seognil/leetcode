/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) return [];

  const result = [];

  let lr = matrix.length,
    lc = matrix[0].length,
    r = 0,
    c = -1;

  while (lr > 0 && lc > 0) {
    for (let i = 0; i < lc; i++) result.push(matrix[r][++c]);
    if (lr == 1) break;
    for (let i = 0; i < lr - 1; i++) result.push(matrix[++r][c]);
    for (let i = 0; i < lc - 1; i++) result.push(matrix[r][--c]);
    if (lc == 1) break;
    for (let i = 0; i < lr - 2; i++) result.push(matrix[--r][c]);

    lr -= 2;
    lc -= 2;
  }

  return result;
};
