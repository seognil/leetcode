'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
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
const twoSum = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    const sum = numbers[i] + numbers[j];
    if (sum === target) break;
    if (sum > target) j--;
    if (sum < target) i++;
  }
  return [i + 1, j + 1];
};
exports.twoSum = twoSum;
//
