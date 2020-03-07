'use strict';
/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = (T) => {
  // * brute ['948 ms', '30.97 %', '42.2 MB', '88.89 %']
  const result = T.map((e, i) => {
    let searchIndex = i;
    while (searchIndex <= T.length - 1) {
      if (e < T[searchIndex]) return searchIndex - i;
      searchIndex++;
    }
    return 0;
  });
  return result;
};
exports.dailyTemperatures = dailyTemperatures;
