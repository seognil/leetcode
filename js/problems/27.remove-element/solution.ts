/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums: number[], val: number): number => {
  const len = nums.length;
  let p1 = 0;
  for (let p2 = 0; p2 < len; p2++) {
    if (nums[p2] != val) {
      nums[p1] = nums[p2];
      p1++;
    }
  }
  return p1;
};

export { removeElement };
