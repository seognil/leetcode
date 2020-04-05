/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1: number[], nums2: number[]): number[] => {
  // * ['48 ms', '98.49 %', '35.3 MB', '55.56 %']

  // * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/solution/jin-jie-san-wen-by-user5707f/

  // * if already sorted, it's O(n), but still need to keep these code
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  const result: number[] = [];

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
      result.push(nums1[p1]);
      p1++;
      p2++;
    }
  }

  return [...result];
};
// @lc code=end

export { intersect };
