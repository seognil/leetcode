/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

const chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const candi = (bo, [x, y]) => {
  const ex = new Set(chars);
  const [bx, by] = [~~(x / 3) * 3, ~~(y / 3) * 3];
  for (let i = 0; i < 9; i++) {
    ex.delete(bo[x][i]);
    ex.delete(bo[i][y]);
    ex.delete(bo[bx + ~~(i / 3)][by + (i % 3)]);
  }
  return ex;
};

const findEmpty = (bo) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (bo[i][j] == '.') return [i, j];
    }
  }
  return null;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  // TODO, recursion DP, try stack DP // seognil LC 2019/06/08
  const pos = findEmpty(board);
  if (!pos) return true;

  const [x, y] = pos;
  const list = candi(board, pos);
  for (const e of list) {
    board[x][y] = e;
    if (solveSudoku(board)) return true;
    board[x][y] = '.';
  }

  return false;
};
