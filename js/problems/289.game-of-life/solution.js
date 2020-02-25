/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // e == 1 // origin
  // store info in bit in-place, e.g. `101` is `two neighbors, e`

  const bump = (board, i, j) => {
    const e = board[i] && board[i][j];
    if (isNaN(e)) return;
    board[i][j] = 2 + e;
  };
  board.forEach((row, i) =>
    row.forEach((e, j) => {
      if (e % 2 == 1) {
        bump(board, i - 1, j - 1);
        bump(board, i - 1, j);
        bump(board, i - 1, j + 1);
        bump(board, i, j - 1);
        bump(board, i, j + 1);
        bump(board, i + 1, j - 1);
        bump(board, i + 1, j);
        bump(board, i + 1, j + 1);
      }
    }),
  );
  board.forEach((row, i) =>
    row.forEach((e, j) => {
      const neighbor = e >> 1;
      e = e % 2;
      if (e === 0) {
        if (neighbor == 3) e = 1;
      } else {
        e = neighbor < 2 || neighbor > 3 ? 0 : 1;
      }
      board[i][j] = e;
    }),
  );

  return board;
};
