/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = (matrix: number[][]): number[] => {
  // * empty
  if (!matrix.length || !matrix[0].length) return [];
  // * one line
  if (matrix.length === 1) return [...matrix[0]];
  // * one row
  if (matrix[0].length === 1) return matrix.map((e) => e[0]);

  const result = [];

  let row = 0;
  let column = -1;
  let rowMax = matrix.length;
  let columnMax = matrix[0].length;

  // * walk
  while (rowMax > 0 && columnMax > 0) {
    for (let i = 0; i < columnMax; i++) result.push(matrix[row][++column]);

    if (rowMax == 1) break;

    for (let i = 0; i < rowMax - 1; i++) result.push(matrix[++row][column]);
    for (let i = 0; i < columnMax - 1; i++) result.push(matrix[row][--column]);

    if (columnMax == 1) break;

    for (let i = 0; i < rowMax - 2; i++) result.push(matrix[--row][column]);

    rowMax -= 2;
    columnMax -= 2;
  }

  return result;
};

export { spiralOrder };
