/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums: number[]): number => {
  // * ['68 ms', '84.38 %', '35.4 MB', '100 %']

  let newLen = 0;
  let lastVal;
  let dupCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (dupCount >= 2 && e === lastVal) continue;
    dupCount = e === lastVal ? dupCount + 1 : 1;
    nums[newLen] = e;
    lastVal = e;
    newLen++;
  }

  nums.length = newLen;
  return newLen;
};
// @lc code=end

export { removeDuplicates };
