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
  // * ['52 ms', '87.87 %', '35.1 MB', '30 %']
  // * pure O(logN)
  let left = 0;
  let right = nums.length - 1;
  // * ---------------- find at least one match
  let matchIndex = -1;
  while (left <= right) {
    const mid = ~~((left + right) / 2);
    const midVal = nums[mid];
    if (midVal < target) left = mid + 1;
    else if (midVal > target) right = mid - 1;
    else {
      matchIndex = mid;
      break;
    }
  }
  // * ---------------- find boundary if it has
  const result = [-1, -1];
  if (matchIndex !== -1) {
    // * ---------------- left boundary
    let l = left;
    let r = matchIndex;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      const midVal = nums[mid];
      if (midVal !== target) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    result[0] = l;
    // * ---------------- right boundary
    l = matchIndex;
    r = right;
    while (l < r) {
      const mid = Math.ceil((l + r) / 2);
      const midVal = nums[mid];
      if (midVal !== target) {
        r = mid - 1;
      } else {
        l = mid;
      }
    }
    result[1] = l;
  }
  return result;
};
exports.searchRange = searchRange;
