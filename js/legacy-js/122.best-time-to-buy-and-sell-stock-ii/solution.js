/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let start = prices[0],
    last = start,
    sum = 0;

  for (let i = 0; i < prices.length; i++) {
    const e = prices[i];
    if (e < last) {
      sum += last - start;
      start = e;
    }
    last = e;
  }
  sum += last - start;

  return sum;
};
