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
  // * inspired by https://leetcode-cn.com/problems/open-the-lock/solution/javascriptti-jie-bfs-es6-set-220-ms-by-user8191/
  var _a;
  // * this's my fastest ['124 ms', '94.29 %', '42.3 MB', '100 %']
  if (deadends.includes('0000') || deadends.includes(target)) return -1;
  if (target === '0000') return 0;
  // * use number, not string, without data type transform, it's faster
  const numTarget = Number(target);
  const steps = {
    0: 0,
  };
  deadends.forEach((code) => {
    steps[Number(code)] = -1;
  });
  // * ----------------
  const bfsWalker = (cur) => {
    const neighbors = [];
    // * but bfs calculation is a bit complex, it's using number
    for (let i = 0; i < 4; i++) {
      const base = Math.pow(10, i);
      const c = ~~(cur / base) % 10;
      neighbors.push(c === 9 ? cur - 9 * base : cur + 1 * base);
      neighbors.push(c === 0 ? cur + 9 * base : cur - 1 * base);
    }
    return neighbors.filter((e) => steps[e] === undefined);
  };
  // * ----------------
  const queue = [0];
  let cur;
  while (queue.length) {
    cur = queue.shift();
    const nextStep = steps[cur] + 1;
    if (cur === numTarget) {
      steps[numTarget] = nextStep - 1;
      break;
    }
    const neighbors = bfsWalker(cur);
    neighbors.forEach((e) => {
      steps[e] = nextStep;
      queue.push(e);
    });
  }
  return (_a = steps[numTarget]) !== null && _a !== void 0 ? _a : -1;
};
exports.openLock = openLock;
