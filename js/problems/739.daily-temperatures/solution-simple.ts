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
const dailyTemperatures = (T: number[]): number[] => {
  // * brute ['948 ms', '30.97 %', '42.2 MB', '88.89 %']

  const result: number[] = T.map((e, i) => {
    let searchIndex = i;
    while (searchIndex <= T.length - 1) {
      if (e < T[searchIndex]) return searchIndex - i;
      searchIndex++;
    }
    return 0;
  });

  return result;
};
// @lc code=end

export { dailyTemperatures };
