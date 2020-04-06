type Char = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Board = (Char | '.')[][];

// * ----------------------------------------------------------------

/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board: Board) => {
  // * ['68 ms', '93.89 %', '37.6 MB', '93.33 %']

  type Pools = Set<Char>[];

  const rowPools: Pools = Array.from({ length: 9 }, () => new Set<Char>());
  const columnPools: Pools = Array.from({ length: 9 }, () => new Set<Char>());
  const blockPools: Pools = Array.from({ length: 9 }, () => new Set<Char>());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const c = board[row][col];

      if (c === '.') continue;

      let pool: Set<Char>;

      pool = rowPools[row];
      if (pool.has(c)) return false;
      pool.add(c);

      pool = columnPools[col];
      if (pool.has(c)) return false;
      pool.add(c);

      pool = blockPools[~~(row / 3) * 3 + ~~(col / 3)];
      if (pool.has(c)) return false;
      pool.add(c);
    }
  }

  return true;
};
// @lc code=end

export { isValidSudoku };
