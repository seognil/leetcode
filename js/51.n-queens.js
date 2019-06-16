/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const queens = new Array(n);
  const results = [];

  const genRow = (i) => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1);

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
      results.push(queens.map(genRow));
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
