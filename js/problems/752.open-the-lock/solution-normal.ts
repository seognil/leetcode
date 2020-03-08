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
  // * inspired by https://leetcode-cn.com/problems/open-the-lock/solution/javascript-72ms-by-zxy7/
  // * his answer is actually super slow ( 1464 ms )
  // * Mine is faster ( 384 ms )

  if (deadends.includes('0000') || deadends.includes(target)) return -1;
  if (target === '0000') return 0;

  // * ---------------- prepare

  type Code = string;

  const steps: Record<Code, number> = { '0000': 0 };

  deadends.forEach((code) => {
    steps[code] = -1;
  });

  // * ---------------- bfsWalker

  const bfsWalker = (cur: Code): Code[] => {
    const curArr = cur.split('');
    const neighbors: Code[] = [];

    // * try mutate
    for (let i = 0; i < 4; i++) {
      const char = cur[i];

      curArr[i] = char === '9' ? '0' : String(Number(char) + 1);
      neighbors.push(curArr.join(''));

      curArr[i] = char === '0' ? '9' : String(Number(char) - 1);
      neighbors.push(curArr.join(''));

      curArr[i] = char;
    }

    return neighbors.filter((e) => steps[e] === undefined);
  };

  // * ---------------- start searching

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
