/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  nums.forEach((e) => {
    e = Math.abs(e) - 1;
    nums[e] > 0 && (nums[e] = -nums[e]);
  });

  const miss = [];
  for (let i = 0; i < nums.length; i++) {
    nums[i] > 0 && miss.push(i + 1);
  }
  return miss;
};
