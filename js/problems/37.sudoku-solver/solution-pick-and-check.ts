type Char = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Board = (Char | '.')[][];
type Pos = [number, number];

// * ----------------------------------------------------------------

/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board: Board): void => {
  // * ['72 ms', '91.64 %', '37.7 MB', '100 %']

  solveSudokuWithFlag(board, 0);
};

const solveSudokuWithFlag = (board: Board, fromRow: number): boolean => {
  const pos = findEmptySlot(board, fromRow);
  if (pos === null) return true;

  const [row, col] = pos;

  for (let i = 1; i <= 9; i++) {
    const char = String(i) as Char;
    if (!isValidPick(board, row, col, char)) continue;

    board[row][col] = char;
    if (solveSudokuWithFlag(board, row)) return true;
    board[row][col] = '.';
  }

  return false;
};

const isValidPick = (board: Board, row: number, col: number, char: Char): boolean => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === char) return false;
    if (board[i][col] === char) return false;
  }

  const blockX = Math.floor(row / 3) * 3;
  const blockY = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[blockX + i][blockY + j] === char) return false;
    }
  }

  return true;
};

const findEmptySlot = (board: Board, fromRow: number): Pos | null => {
  for (let row = fromRow; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === '.') return [row, col];
    }
  }
  return null;
};

// @lc code=end

export { solveSudoku };
