import { Grid } from './types';

/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid: Grid): number => {
  // * DFS https://leetcode.com/problems/number-of-islands/discuss/391717/JavaScript-DFS-56ms-very-easy-to-understand

  if (!grid.length) return 0;

  const row = grid.length;
  const col = grid[0].length;

  const dfsWipeout = (r: number, c: number): void => {
    if (r < 0 || r >= row || c < 0 || c >= col) return;
    if (grid[r][c] === '0') return;

    // * wipe island part
    grid[r][c] = '0';

    dfsWipeout(r + 1, c);
    dfsWipeout(r - 1, c);
    dfsWipeout(r, c + 1);
    dfsWipeout(r, c - 1);
  };

  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfsWipeout(i, j);
      }
    }
  }

  return count;
};
// @lc code=end

export { numIslands };
