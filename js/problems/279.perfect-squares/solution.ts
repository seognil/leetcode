/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

const history: Record<number, number> = {};

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n: number): number => {
  // * dp ['68 ms', '97.17 %', '35.8 MB', '100 %']

  const sqrtN = n ** 0.5;
  const intSqrtN = Math.floor(sqrtN);

  // * for just square number
  if (sqrtN == intSqrtN) return 1;

  // * ---------------- rest cases

  let restMin: number = Infinity;

  for (let i = intSqrtN; i > 0; i--) {
    const rest = n - i ** 2;

    if (!history[rest]) history[rest] = numSquares(rest);

    restMin = Math.min(restMin, history[rest]);
  }

  // * for add-ups
  return restMin + 1;
};

// @lc code=end

export { numSquares };
