/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums: number[]): void => {
  const len = nums.length;

  let p1 = 0;
  let p2 = 0;

  // * walk two pointers
  while (p2 < len) {
    if (nums[p2] !== 0) {
      nums[p1] = nums[p2];
      p1++;
    }

    p2++;
  }

  // * set reset to zero
  while (p1 < len) {
    nums[p1] = 0;
    p1++;
  }

  return;
};

export { moveZeroes };
