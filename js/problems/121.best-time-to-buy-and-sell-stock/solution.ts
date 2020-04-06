/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices: number[]): number => {
  // * ['56 ms', '86.44 %', '35.5 MB', '51.85 %']

  // * O(n) solution, one pass

  let min = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    min = Math.min(min, cur);
    profit = Math.max(profit, cur - min);
  }

  return profit;
};
// @lc code=end

export { maxProfit };
