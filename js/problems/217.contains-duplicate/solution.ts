/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums: number[]): boolean => {
  // * ['56 ms', '97.28 %', '40 MB', '88.24 %']

  return new Set(nums).size !== nums.length;
};
// @lc code=end

export { containsDuplicate };
