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
  // * its only ['68 ms', '63.37 %', '40.4 MB', '29.03 %']
  // * not so good

  if (!grid.length || !grid[0].length) return 0;

  const row = grid.length;
  const col = grid[0].length;

  const queue: [number, number][] = [];
  const visited: boolean[][] = grid.map(() => []);

  const tryEnQueue = (r: number, c: number) => {
    if (r < 0 || r >= row || c < 0 || c >= col) return;

    if (visited[r][c]) return;
    visited[r][c] = true;

    if (grid[r][c] === '0') return;

    queue.push([r, c]);
  };

  const bfsWipeout = (): void => {
    while (queue.length) {
      const [r, c] = queue.shift()!;

      // * wipe island part
      grid[r][c] = '0';

      // * bfs enqueue or not
      tryEnQueue(r + 1, c);
      tryEnQueue(r - 1, c);
      tryEnQueue(r, c + 1);
      tryEnQueue(r, c - 1);
    }
  };

  let count = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (visited[i][j]) continue;

      visited[i][j] = true;

      if (grid[i][j] === '1') {
        count++;
        queue.push([i, j]);
        bfsWipeout();
      }
    }
  }

  return count;
};
// @lc code=end

export { numIslands };
