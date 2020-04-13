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
const twoSum = (nums: number[], target: number): number[] => {
  // * ['52 ms', '92.7 %', '35 MB', '28.1 %']

  // * value index map
  const map: Record<string, number> = {};

  nums.forEach((e, i) => (map[e] = i));

  let p1 = 0;
  let p2 = 0;

  for (; p1 < nums.length; p1++) {
    p2 = map[target - nums[p1]];
    if (p2 !== undefined && p1 !== p2) break;
  }

  // * exactly one solution, so no error checking
  return [p1, p2];
};
// @lc code=end

export { twoSum };
