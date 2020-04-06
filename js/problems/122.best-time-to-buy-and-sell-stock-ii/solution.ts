/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices: number[]): number => {
  // * ['52 ms', '93.42 %', '35.6 MB', '28.57 %']

  if (prices.length < 2) return 0;

  let buy = prices[0];
  let prev = buy;
  let sum = 0;

  for (let i = 1; i < prices.length; i++) {
    const cur = prices[i];
    if (prev > cur) {
      sum += prev - buy;
      buy = cur;
    }
    prev = cur;
  }

  sum += prev - buy;

  return sum;
};
// @lc code=end

export { maxProfit };
