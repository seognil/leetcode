/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums: number[]): number => {
  // * ['52 ms', '89.47 %', '33.8 MB', '100 %']
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // * if almost every val equals, then linear is faster than binary
    // * e.g: 2222212222322222222222220222, check that b**ch!

    while (nums[left] === nums[left + 1]) left += 1;
    while (nums[right] === nums[right - 1]) right -= 1;

    const mid = ~~((left + right) / 2);

    if (nums[mid - 1] > nums[mid]) return nums[mid];

    if (nums[mid] < nums[right]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
};
// @lc code=end

export { findMin };
