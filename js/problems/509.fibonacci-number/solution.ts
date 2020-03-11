/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
const fib = (N: number): number => {
  // * ['48 ms', '92.72 %', '33.8 MB', '100 %']

  if (N < 2) return N;

  if (!history[N]) history[N] = fib(N - 1) + fib(N - 2);

  return history[N];
};

const history: Record<number, number> = { 0: 0, 1: 1 };

// @lc code=end

export { fib };
