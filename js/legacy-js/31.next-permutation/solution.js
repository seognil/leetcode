/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length;

  const swap = (nums, i, j) => {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
  };

  const reverse = (nums, i, j) => {
    while (i < j) swap(nums, i, j), i++, j--;
  };

  const tryPart = (nums, i) => {
    const k = nums[i];
    if (k >= nums[i + 1]) return false;
    reverse(nums, i + 1, len - 1);
    for (let j = i + 1; j < len; j++) {
      if (k < nums[j]) {
        swap(nums, i, j);
        return true;
      }
    }
  };

  for (let i = len - 2; i >= 0; i--) {
    if (tryPart(nums, i)) return;
  }

  reverse(nums, 0, len - 1);
};
