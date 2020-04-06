/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = (nums: number[]): number => {
  // * ['56 ms', '80.02 %', '35.3 MB', '85.71 %']

  // * https://leetcode-cn.com/problems/find-the-duplicate-number/solution/er-fen-fa-si-lu-ji-dai-ma-python-by-liweiwei1419/

  // * search log(n) times, every time costs n steps
  // * and it's O(1) extra space

  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const mid = ~~((left + right) / 2);

    let count = 0;
    nums.forEach((e) => {
      if (e <= mid) {
        count++;
      }
    });

    if (count <= mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};
// @lc code=end

export { findDuplicate };
