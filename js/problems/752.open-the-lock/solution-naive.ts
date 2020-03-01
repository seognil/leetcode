/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = (deadends: string[], target: string): number => {
  // * first version, passed 552ms, not so good

  if (deadends.includes('0000') || deadends.includes(target)) return -1;
  if (target === '0000') return 0;

  // * ----------------

  type Code = string;

  const steps: Record<Code, number> = {
    '0000': 0,
  };

  deadends.forEach((code) => {
    steps[code] = -1;
  });

  // * ----------------

  const bfsWalker = (cur: Code): Code[] => {
    const [a, b, c, d] = cur.split('').map((e) => Number(e));

    const neighbors = [
      [a + 1, b, c, d],
      [a - 1, b, c, d],
      [a, b + 1, c, d],
      [a, b - 1, c, d],
      [a, b, c + 1, d],
      [a, b, c - 1, d],
      [a, b, c, d + 1],
      [a, b, c, d - 1],
    ]
      .map((e) => e.map((j) => (j + 10) % 10).join(''))
      .filter((e) => steps[e] === undefined);

    return neighbors;
  };

  // * ----------------

  const queue: Code[] = ['0000'];

  let cur: Code;
  while (queue.length) {
    cur = queue.shift()!;

    const nextStep = steps[cur] + 1;

    if (cur === target) {
      steps[target] = nextStep - 1;
      break;
    }

    const neighbors = bfsWalker(cur);

    neighbors.forEach((e) => {
      steps[e] = nextStep;
      queue.push(e);
    });
  }

  return steps[target] ?? -1;
};
// @lc code=end

export { openLock };
