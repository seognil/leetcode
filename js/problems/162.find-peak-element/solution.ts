/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums: number[]): number => {
  // * ['48 ms', '92.04 %', '34.1 MB', '75 %']

  let left = 0;
  let right = nums.length - 1;
  let pivot = 0;

  nums[-1] = nums[nums.length] = -Infinity;

  while (true) {
    pivot = ~~((left + right) / 2);

    if (nums[pivot - 1] < nums[pivot] && nums[pivot] > nums[pivot + 1]) break;

    if (nums[pivot] < nums[pivot + 1]) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }

  delete nums[-1];
  delete nums[nums.length - 1];

  return pivot;
};
// @lc code=end

export { findPeakElement };
