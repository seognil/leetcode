/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const numSquares = (n: number): number => {
  // * bfs ? ['92 ms', '90.63 %', '41.5 MB', '12.5 %']

  // * double memory usage, not good
  const queue: [number, number][] = [[n, 1]];

  const visited: Record<number, boolean> = {};

  while (queue.length) {
    const [n, step] = queue.shift()!;
    const sqrtN = n ** 0.5;
    const intSqrtN = Math.floor(sqrtN);

    // * found
    if (sqrtN === intSqrtN) return step;

    const nextStep = step + 1;
    for (let i = intSqrtN; i > 0; i--) {
      const rest = n - i ** 2;
      if (!visited[rest]) {
        queue.push([rest, nextStep]);
        visited[rest] = true;
      }
    }
  }

  // * really never touched
  return 0;
};

// @lc code=end

export { numSquares };
