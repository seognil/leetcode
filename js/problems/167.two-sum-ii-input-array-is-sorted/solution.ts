/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers: number[], target: number): number[] => {
  let i = 0;
  let j = numbers.length - 1;

  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) return [i + 1, j + 1];
    if (sum > target) j--;
    if (sum < target) i++;
  }

  return [];
};

export { twoSum };
