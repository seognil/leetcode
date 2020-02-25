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
  const map: Record<string, number> = {};
  nums.forEach((e, i) => (map[e] = i));
  for (let i = 0; i < nums.length; i++) {
    const j = map[target - nums[i]];
    if (j && i !== j) return [i, j];
  }
  return [];
};
// @lc code=end

export { twoSum };
