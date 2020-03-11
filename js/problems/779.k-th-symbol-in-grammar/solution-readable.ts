/*
 * @lc app=leetcode id=779 lang=javascript
 *
 * [779] K-th Symbol in Grammar
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar = (N: number, K: number): number => {
  // * ['52 ms', '70.55 %', '33.7 MB', '100 %']

  if (N === 1) return 0;

  const prev = kthGrammar(N - 1, Math.ceil(K / 2));

  return map[prev][(K - 1) % 2];
};

const map: Record<number, number[]> = { 0: [0, 1], 1: [1, 0] };
// @lc code=end

export { kthGrammar };
