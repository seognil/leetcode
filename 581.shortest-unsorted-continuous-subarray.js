/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (!nums || nums.length < 2) return 0;

  let subMin = Infinity,
    subMax = -Infinity,
    len = nums.length,
    last;

  for (let i = 0; i < len; i++) {
    const e = nums[i];
    if (last > e) {
      subMin = Math.min(subMin, e);
      subMax = Math.max(subMax, last);
    }
    last = e;
  }

  // * not found peek
  if (subMin == Infinity) return 0;

  for (let i = 0; i < len; i++) {
    const e = nums[i];
    if (e > subMin) {
      subMin = i;
      break;
    }
  }

  for (let i = len - 1; i > 0; i--) {
    const e = nums[i];
    if (subMax > e) {
      subMax = i;
      break;
    }
  }

  return subMax - subMin + 1;
};
