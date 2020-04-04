'use strict';
/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {
  // * ['88 ms', '88.12 %', '40.4 MB', '100 %']
  // * https://www.cnblogs.com/grandyang/p/7519466.html
  let left = 0;
  let right = arr.length - k;
  while (left < right) {
    const mid = ~~((left + right) / 2);
    if (arr[mid] + arr[mid + k] < 2 * x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr.slice(left, left + k);
};
exports.findClosestElements = findClosestElements;
