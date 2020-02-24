/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  if (!nums.length) return -1;
  const half = nums.reduce((a, e) => a + e) / 2;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (half - nums[i] / 2 == count) return i;
    count += nums[i];
  }
  return -1;
};
