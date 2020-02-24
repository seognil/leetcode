/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = Array.from({ length: numRows }, () => []);

  for (let i = 0; i < numRows; i++) {
    const row = result[i];
    row[0] = row[i] = 1;

    if (i < 2) continue;

    let prev = result[i - 1];
    for (let j = 1; j < i; j++) {
      row[j] = prev[j] + prev[j - 1];
    }
  }
  return result;
};
