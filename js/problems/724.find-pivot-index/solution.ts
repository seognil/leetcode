/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums: number[]): number => {
  if (nums.length < 1) return -1;

  const halfSum = nums.reduce((a, e) => a + e) / 2;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // * https://leetcode.com/problems/find-pivot-index/discuss/136167/This-is-a-very-poorly-described-problem
    // * pivot index is included in both sub-arrays

    leftSum += nums[i];
    if (leftSum === halfSum + nums[i] / 2) return i;
  }

  return -1;
};

export { pivotIndex };
