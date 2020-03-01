/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums: number[]): number => {
  let max = 0;

  let p1 = -1;

  for (let p2 = 0; p2 < nums.length; p2++) {
    if (nums[p2] === 1) {
      max = Math.max(max, p2 - p1);
    } else {
      p1 = p2;
    }
  }

  return max;
};

export { findMaxConsecutiveOnes };
