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
  // * ['60 ms', '52.35 %', '35.4 MB', '30.77 %']

  // * sort is O(n*log(n))

  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  const result = new Set<number>();

  const len1 = nums1.length;
  const len2 = nums2.length;
  let p1 = 0;
  let p2 = 0;

  while (p1 < len1 && p2 < len2) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      result.add(nums1[p1]);
      p1++;
      p2++;
    }
  }

  return [...result];
};
// @lc code=end

export { intersection };
