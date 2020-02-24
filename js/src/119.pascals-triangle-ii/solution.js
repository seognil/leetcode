/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const result = [1];
  let row = 0;

  while (++row <= rowIndex) {
    result[row] = 1;

    let prev = 1,
      cur = null;
    for (let i = 1; i < row; i++) {
      cur = result[i];
      result[i] += prev;
      prev = cur;
    }
  }

  return result;
};
