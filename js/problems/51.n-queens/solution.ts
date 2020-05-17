/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start

type RowQIndexList = (number | undefined)[];

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n: number): string[][] => {
  // * ['60 ms', '98.79 %', '36.4 MB', '88.50 %']

  const queens: RowQIndexList = new Array(n);
  const results: string[][] = [];

  const loopRun = (queens: RowQIndexList, row = 0): void => {
    // * filled as solved, push valid solution
    if (queens[n - 1] !== undefined) {
      results.push(queens.map((e) => makeRowStr(e!, n)));
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

const makeRowStr = (i: number, n: number): string => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1);

// @lc code=end

export { solveNQueens };
