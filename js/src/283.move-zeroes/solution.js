/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const len = nums.length;
  let i = 0;
  for (let j = 0; j < len; j++) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
  }
  while (i < len) {
    nums[i] = 0;
    i++;
  }

  return nums;
};
