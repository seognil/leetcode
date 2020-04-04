/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (nums.length <= 1 || k < 1 || t < 0) return false;

  const sub = [];
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    sub.push(e);
    if (i > k) sub.shift();
    for (let j = 0; j < sub.length - 1; j++) {
      if (Math.abs(e - sub[j]) <= t) return true;
    }
  }

  return false;
};
