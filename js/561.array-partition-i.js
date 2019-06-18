/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums.sort((a, b) => a - b).reduce((a, e, i) => (i % 2 ? a : a + e));
};
