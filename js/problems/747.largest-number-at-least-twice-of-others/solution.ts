/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums: number[]): number => {
  if (!nums.length) return -1;

  let max = nums[0],
    maxi = 0;

  for (let i = 1; i < nums.length; i++) {
    const e = nums[i];
    if (e > max) {
      max = e;
      maxi = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i !== maxi && nums[i] * 2 > max) return -1;
  }

  return maxi;
};

export { dominantIndex };
