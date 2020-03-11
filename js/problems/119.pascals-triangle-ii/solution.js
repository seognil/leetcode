'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  // * ['44 ms', '98.06 %', '33.8 MB', '70 %']
  // * O(k) space means in-place algo
  // * row `n` has `n+1` numbers
  // * row 0 is [1]
  // * row 1 is [1,1]
  // * row 1 is [1,2,1]
  const result = [1];
  let row = 0;
  while (row < rowIndex) {
    row++;
    // * append last 1
    result[row] = 1;
    let prev = 1;
    let cur = null;
    // * loop adder
    for (let i = 1; i < row; i++) {
      cur = result[i];
      result[i] += prev;
      prev = cur;
    }
  }
  return result;
};
exports.getRow = getRow;
