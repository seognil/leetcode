/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start

type RowQIndexList = (number | undefined)[];

/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n: number): number => {
  // * ['60 ms', '80.28 %', '34.3 MB', '100 %']

  const queens: RowQIndexList = new Array(n);
  let results = 0;

  const loopRun = (queens: RowQIndexList, row = 0): void => {
    // * filled as solved, push valid solution
    if (queens[n - 1] !== undefined) {
      results += 1;
      return;
    }

    for (let i = 0; i < n; i++) {
      queens[row] = i;
      if (checkQueens(queens, row)) {
        loopRun(queens, row + 1);
      }
      queens[row] = undefined;
    }
  };

  loopRun(queens);

  return results;
};

const checkQueens = (queens: RowQIndexList, row: number): boolean => {
  const e = queens[row];

  for (let i = 0; i < row; i++) {
    const k = queens[i]!;
    if (k === e || k - row + i === e || k + row - i === e) return false;
  }
  return true;
};

// @lc code=end

export { totalNQueens };
