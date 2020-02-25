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
  if (nums.length < 1) return -1;

  // * more functional

  const [max, indexOfMax] = nums.reduce(
    ([max, indexOfMax], e, i) => (e > max ? [e, i] : [max, indexOfMax]),
    [nums[0], 0],
  );

  const matchRule2 = nums.every((e, i) => i == indexOfMax || max >= e * 2);

  return matchRule2 ? indexOfMax : -1;
};

export { dominantIndex };
