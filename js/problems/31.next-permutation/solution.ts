/*
 * @lc app=leetcode id=31 lang=javascript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = (nums: number[]): void => {
  // * ['60 ms', '96.52 %', '35 MB', '41.43 %']

  const len = nums.length;

  for (let i = len - 2; i >= 0; i--) {
    const k = nums[i];
    if (k >= nums[i + 1]) continue;

    // * found, make next permutation
    reverse(nums, i + 1, len - 1);
    for (let j = i + 1; j < len; j++) {
      if (k < nums[j]) {
        swap(nums, i, j);

        // * found
        return;
      }
    }
  }

  // * not found, so it's highest, make lowsest
  reverse(nums, 0, len - 1);
};

const swap = (nums: number[], i: number, j: number): void => {
  const t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
};

const reverse = (nums: number[], i: number, j: number): void => {
  while (i < j) swap(nums, i, j), i++, j--;
};

// @lc code=end

export { nextPermutation };
