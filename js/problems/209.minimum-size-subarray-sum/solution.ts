/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s: number, nums: number[]): number => {
  if (!nums.length) return 0;

  const len = nums.length;

  let p1 = 0,
    p2 = -1,
    minLen = Infinity,
    sum = 0;

  while (p2 < len) {
    while (sum < s) {
      p2++;
      sum += nums[p2];
    }

    while (sum >= s) {
      minLen = Math.min(minLen, p2 - p1 + 1);

      if (minLen === 1) return 1;

      sum -= nums[p1];
      p1++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

export { minSubArrayLen };
