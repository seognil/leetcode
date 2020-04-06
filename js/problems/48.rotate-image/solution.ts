/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix: number[][]): void => {
  // * ['52 ms', '82.11 %', '33.7 MB', '100 %']

  const n = matrix.length;
  const end = n - 1;
  const loop1 = Math.ceil(n / 2);
  const loop2 = Math.floor(n / 2);

  for (let row = 0; row < loop1; row++) {
    for (let col = 0; col < loop2; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[end - col][row];
      matrix[end - col][row] = matrix[end - row][end - col];
      matrix[end - row][end - col] = matrix[col][end - row];
      matrix[col][end - row] = temp;
    }
  }
};
// @lc code=end

export { rotate };
