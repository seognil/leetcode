/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = (n: number): number[][] => {
  // * ['52 ms', '92.84 %', '33.9 MB', '37.5 %']

  // * if invalid
  if (n < 1) return [];

  // * ----------------

  const result = Array.from({ length: n }, () => Array(n));

  let count = 0;
  let r = 0;
  let c = -1;
  let step = n;

  while (step > 0) {
    for (let i = 0; i < step; i++) result[r][++c] = ++count;
    for (let i = 0; i < step - 1; i++) result[++r][c] = ++count;
    for (let i = 0; i < step - 1; i++) result[r][--c] = ++count;
    for (let i = 0; i < step - 2; i++) result[--r][c] = ++count;

    step -= 2;
  }

  return result;
};
// @lc code=end

export { generateMatrix };
