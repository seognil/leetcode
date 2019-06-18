/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (!nums.length) return 0;

  const len = nums.length;
  let i = 0,
    j = -1,
    min = Infinity,
    sum = 0;
  while (j < len) {
    while (sum < s) {
      j++;
      sum += nums[j];
    }

    while (sum >= s) {
      min = Math.min(min, j - i + 1);
      if (min === 1) return 1;
      sum -= nums[i];
      i++;
    }
  }

  return min === Infinity ? 0 : min;
};
