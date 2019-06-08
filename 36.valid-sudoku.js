/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const helper = (e, i, s) => {
    if (!s[i]) s[i] = new Set();
    return s[i].has(e) ? false : s[i].add(e);
  };

  const sRow = [],
    sColumn = [],
    sBlock = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const e = board[i][j];

      if (e === '.') continue;
      if (
        !helper(e, i, sRow) ||
        !helper(e, j, sColumn) ||
        !helper(e, ~~(i / 3) * 3 + ~~(j / 3), sBlock)
      )
        return false;
    }
  }

  return true;
};
