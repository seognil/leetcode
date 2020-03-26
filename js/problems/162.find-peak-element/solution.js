'use strict';
/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  // * ['48 ms', '92.04 %', '34.1 MB', '75 %']
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  nums[-1] = nums[nums.length] = -Infinity;
  while (true) {
    mid = ~~((left + right) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) break;
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  delete nums[-1];
  delete nums[nums.length - 1];
  return mid;
};
exports.findPeakElement = findPeakElement;
