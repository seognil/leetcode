/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
const dailyTemperatures = (Temps: number[]): number[] => {
  // * helper stack solution  ['128 ms', '96.53 %', '42.4 MB', '77.78 %']
  // * https://leetcode-cn.com/problems/daily-temperatures/solution/cheng-xu-yuan-de-zi-wo-xiu-yang-739-daily-temperat/

  const result: number[] = new Array(Temps.length).fill(0);
  const waitingStack: number[] = [];

  const last = (arr: number[]): number => arr[arr.length - 1];

  for (let curIndex = 0; curIndex < Temps.length; curIndex++) {
    const curTemp = Temps[curIndex];

    while (waitingStack.length && curTemp > Temps[last(waitingStack)]) {
      const waitingIndex = waitingStack.pop()!;
      result[waitingIndex] = curIndex - waitingIndex;
    }
    waitingStack.push(curIndex);
  }

  return result;
};
// @lc code=end

export { dailyTemperatures };
