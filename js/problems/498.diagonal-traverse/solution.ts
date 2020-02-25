/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = (matrix: number[][]): number[] => {
  // * empty
  if (!matrix.length || !matrix[0].length) return [];
  // * one line
  if (matrix.length === 1) return [...matrix[0]];
  // * one row
  if (matrix[0].length === 1) return matrix.map((e) => e[0]);

  const rowMax = matrix.length - 1;
  const columnMax = matrix[0].length - 1;
  const result = [];

  let row = 1;
  let column = -1;
  let up = true;

  // * walk
  while (!(row === rowMax && column === columnMax)) {
    if (up) row--, column++;
    else row++, column--;

    if (row < 0 || column > columnMax) {
      up = false;
      row++;
      if (column > columnMax) row++, column--;
    } else if (row > rowMax || column < 0) {
      up = true;
      column++;
      if (row > rowMax) row--, column++;
    }

    result.push(matrix[row][column]);
  }

  return result;
};

export { findDiagonalOrder };
