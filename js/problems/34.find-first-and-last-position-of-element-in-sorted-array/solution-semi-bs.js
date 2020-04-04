'use strict';
/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  // * ['56 ms', '67.46 %', '35.2 MB', '30 %']
  // * binary search + linear search, so bit slower in long range
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let pivot = ~~((left + right) / 2);
    if (nums[pivot] < target) {
      left = pivot + 1;
    } else if (nums[pivot] > target) {
      right = pivot - 1;
    } else {
      var midCache;
      midCache = left = right = pivot;
      while (nums[--pivot] == target) left = pivot;
      pivot = midCache;
      while (nums[++pivot] == target) right = pivot;
      return [left, right];
    }
  }
  return [-1, -1];
};
exports.searchRange = searchRange;
