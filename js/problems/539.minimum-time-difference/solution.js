'use strict';
/*
 * @lc app=leetcode id=539 lang=javascript
 *
 * [539] Minimum Time Difference
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = (timePoints) => {
  // * ['84 ms', '85.42 %', '38.7 MB', '100 %']
  const len = timePoints.length;
  const mins = timePoints.map(mapTimeToMin).sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < len; i++) {
    min = Math.min(min, mins[i] - mins[i - 1]);
  }
  min = Math.min(min, mins[0] + 24 * 60 - mins[len - 1]);
  return min;
};
exports.findMinDifference = findMinDifference;
const mapTimeToMin = (e) => {
  const [h, m] = e.split(':');
  return Number(h) * 60 + Number(m);
};
