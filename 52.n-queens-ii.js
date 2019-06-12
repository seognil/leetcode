/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const queens = new Array(n);
  let results = 0;

  const check = (queens, row) => {
    const e = queens[row];

    for (let i = 0; i < row; i++) {
      const k = queens[i];
      if (k === e || k - row + i === e || k + row - i === e) return false;
    }
    return true;
  };

  const subway = (queens, row = 0) => {
    if (queens[n - 1] !== undefined) {
      results += 1;
      return;
    }

    for (let i = 0; i < n; i++) {
      queens[row] = i;
      if (check(queens, row)) {
        subway(queens, row + 1);
      }
      queens[row] = undefined;
    }
  };

  subway(queens);

  return results;
};
