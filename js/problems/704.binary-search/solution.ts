/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums: number[], target: number): number => {
  // * ['52 ms', '95.49 %', '36.7 MB', '92.86 %']
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = ~~((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};
// @lc code=end

export { search };
