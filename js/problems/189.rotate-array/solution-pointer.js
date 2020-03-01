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
  const len = nums.length;
  k = k % len;
  if (len < 2 && k == 0) return;
  let writeCount = 0;
  let subLoopStartIndex = 0;
  while (writeCount < len) {
    let p = subLoopStartIndex;
    let cacheItem = nums[p];
    do {
      const nextIndex = (p + k) % len;
      // * jump, write, cache
      const temp = nums[nextIndex];
      nums[nextIndex] = cacheItem;
      cacheItem = temp;
      p = nextIndex;
      writeCount++;
    } while (subLoopStartIndex !== p);
    subLoopStartIndex++;
  }
  return;
};
exports.rotate = rotate;
