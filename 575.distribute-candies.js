/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  return Math.min(new Set(candies).size, candies.length / 2);
};
