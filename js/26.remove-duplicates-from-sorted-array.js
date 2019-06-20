/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0,
    j = 0,
    last;

  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (e === last) continue;
    nums[j++] = last = e;
  }
  nums.length = j;
};
