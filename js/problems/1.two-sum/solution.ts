/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums: number[], target: number): number[] {
  // * value index map
  const map: Record<string, number> = {};

  nums.forEach((e, i) => (map[e] = i));

  let i, j;
  i = j = 0;

  while (i < nums.length) {
    j = map[target - nums[i]];

    // * found
    if (j !== undefined && i !== j) break;

    i++;
  }

  // * exactly one solution, so no error checking
  return [i, j];
};
// @lc code=end

export { twoSum };
