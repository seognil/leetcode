/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums: number[]): number => {
  // * should modify in-place

  let newLen = 0;
  let prevNum;

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];

    if (curNum === prevNum) continue;

    nums[newLen] = prevNum = curNum;

    newLen++;
  }

  // * cut off rest items by directly change length
  nums.length = newLen;

  // * return new length
  return newLen;
};

export { removeDuplicates };
