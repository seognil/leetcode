/*
 * @lc app=leetcode id=498 lang=javascript
 *
 * [498] Diagonal Traverse
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  if (matrix.length === 1) return matrix[0].slice();
  if (matrix[0].length === 1) return matrix.map((e) => e[0]);

  let maxi = matrix.length - 1,
    maxj = matrix[0].length - 1,
    i = 1,
    j = -1,
    up = true,
    result = [];

  while (!(i === maxi && j === maxj)) {
    if (up) i--, j++;
    else i++, j--;

    if (i < 0 || j > maxj) {
      up = false;
      i++;
      if (j > maxj) i++, j--;
    } else if (i > maxi || j < 0) {
      up = true;
      j++;
      if (i > maxi) i--, j++;
    }

    result.push(matrix[i][j]);
  }

  return result;
};
