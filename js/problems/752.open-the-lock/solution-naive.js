'use strict';
/*
 * @lc app=leetcode id=752 lang=javascript
 *
 * [752] Open the Lock
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = (deadends, target) => {
  // * first version, passed 552ms, not so good
  var _a;
  if (deadends.includes('0000') || deadends.includes(target)) return -1;
  if (target === '0000') return 0;
  const steps = {
    '0000': 0,
  };
  deadends.forEach((code) => {
    steps[code] = -1;
  });
  // * ----------------
  const bfsWalker = (cur) => {
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
  const queue = ['0000'];
  let cur;
  while (queue.length) {
    cur = queue.shift();
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
  return (_a = steps[target]) !== null && _a !== void 0 ? _a : -1;
};
exports.openLock = openLock;
