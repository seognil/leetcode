/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1: number[], nums2: number[]): number[] => {
  // * ['48 ms', '97.78 %', '34.1 MB', '92.31 %']
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result: number[] = [];

  set1.forEach((e) => {
    if (set2.has(e)) result.push(e);
  });

  return result;
};
// @lc code=end

export { intersection };
