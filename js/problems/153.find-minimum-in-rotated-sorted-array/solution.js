'use strict';
/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  // * ['48 ms', '94.33 %', '33.8 MB', '87.5 %']
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = ~~((l + r) / 2);
    if (nums[mid - 1] > nums[mid]) return nums[mid];
    if (nums[mid] < nums[r]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return nums[l];
};
exports.findMin = findMin;
