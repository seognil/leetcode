/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums: number[]): number => {
  // * ['56 ms', '83.18 %', '35.3 MB', '88.46 %']

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};
// @lc code=end

export { singleNumber };
