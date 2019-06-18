/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0,
    j = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) max = Math.max(max, i - j);
    else j = i;
  }

  return max;
};
