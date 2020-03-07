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
const dailyTemperatures = (Temps) => {
  // * helper stack solution  ['128 ms', '96.53 %', '42.4 MB', '77.78 %']
  // * https://leetcode-cn.com/problems/daily-temperatures/solution/cheng-xu-yuan-de-zi-wo-xiu-yang-739-daily-temperat/
  const result = new Array(Temps.length).fill(0);
  const waitingStack = [];
  const last = (arr) => arr[arr.length - 1];
  for (let curIndex = 0; curIndex < Temps.length; curIndex++) {
    const curTemp = Temps[curIndex];
    while (waitingStack.length && curTemp > Temps[last(waitingStack)]) {
      const waitingIndex = waitingStack.pop();
      result[waitingIndex] = curIndex - waitingIndex;
    }
    waitingStack.push(curIndex);
  }
  return result;
};
exports.dailyTemperatures = dailyTemperatures;
