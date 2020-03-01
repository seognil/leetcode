'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  if (nums.length < 2) return;
  k = k % nums.length;
  // * unshift is costly, maybe O(kn) space?
  while (k-- > 0) nums.unshift(nums.pop());
  return;
};
exports.rotate = rotate;
