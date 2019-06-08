/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

const choosed = (bo, [x, y]) => {
  const ex = new Set();
  const [bx, by] = [~~(x / 3) * 3, ~~(y / 3) * 3];
  for (let i = 0; i < 9; i++) {
    ex.add(bo[x][i]);
    ex.add(bo[i][y]);
    ex.add(bo[bx + ~~(i / 3)][by + (i % 3)]);
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
  const ex = choosed(board, pos);
  for (let e = 1; e <= 9; e++) {
    const c = '' + e;
    if (!ex.has(c)) {
      board[x][y] = c;
      if (solveSudoku(board)) return true;
      board[x][y] = '.';
    }
  }

  return false;
};
