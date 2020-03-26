/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums: number[], target: number): number => {
  // * ['52 ms', '88.13 %', '33 MB', '100 %']

  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = ~~((l + r) / 2);
    const valLeft = nums[l];
    const valRight = nums[r];
    const valMid = nums[mid];

    if (valMid === target) return mid;

    if (valMid < valRight) {
      if (valMid < target && target <= valRight) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    } else {
      if (valLeft <= target && target < valMid) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return -1;
};

// @lc code=end

export { search };
