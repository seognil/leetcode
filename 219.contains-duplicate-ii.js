/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (nums.length <= 1 || k < 1) return false;
  const map = new Map();
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      map.delete(nums[l]);
      l++;
    }
    if (map.has(nums[i])) return true;
    map.set(nums[i]);
  }
  return false;
};
