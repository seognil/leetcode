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
  const l = nums.length;
  k = k % l;
  if (k !== 0) {
    // * O(n) space
    const mirror = nums.map((e, i) => nums[(l + i - k) % l]);
    // * write back
    for (let i = 0; i < l; i++) {
      nums[i] = mirror[i];
    }
  }
  return;
};
exports.rotate = rotate;
