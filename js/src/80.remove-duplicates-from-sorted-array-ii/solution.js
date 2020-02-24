/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let j = 0,
    last,
    dup = 0;

  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (dup >= 2 && e === last) continue;
    dup = e === last ? dup + 1 : 1;
    nums[j] = e;
    last = e;
    j++;
  }

  nums.length = j;
};
