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
  // * ['184 ms', '24.36 %', '38.1 MB', '100 %']

  solveSudokuWithFlag(board);
};

const solveSudokuWithFlag = (board: Board): boolean => {
  const pos = findEmpty(board);
  if (pos === null) return true;

  const [row, col] = pos;
  const list = getCandidates(board, pos);
  for (const char of list) {
    board[row][col] = char;
    if (solveSudokuWithFlag(board)) return true;
    board[row][col] = '.';
  }

  return false;
};

const chars: Char[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const getCandidates = (board: Board, [row, col]: Pos): Set<Char> => {
  const result = new Set(chars);
  const [blockX, blockY] = [~~(row / 3) * 3, ~~(col / 3) * 3];
  for (let i = 0; i < 9; i++) {
    result.delete(board[row][i] as Char);
    result.delete(board[i][col] as Char);
    result.delete(board[blockX + ~~(i / 3)][blockY + (i % 3)] as Char);
  }
  return result;
};

const findEmpty = (bo: Board): Pos | null => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (bo[row][col] === '.') return [row, col];
    }
  }
  return null;
};

// @lc code=end

export { solveSudoku };
