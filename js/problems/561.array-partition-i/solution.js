'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) =>
  nums.sort((a, b) => a - b).reduce((a, e, i) => (i % 2 ? a : a + e), 0);
exports.arrayPairSum = arrayPairSum;