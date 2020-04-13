/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n: number): string => {
  // * ['52 ms', '89.99 %', '35.7 MB', '33.33 %']

  let result = '1';

  for (let i = 1; i < n; i++) {
    let nextResult = '';
    let step = 1;

    for (let j = 0; j < result.length; j++) {
      if (result[j + 1] === result[j]) {
        step++;
      } else {
        nextResult += `${step}${result[j]}`;
        step = 1;
      }
    }

    result = nextResult;
  }

  return result;
};
// @lc code=end

export { countAndSay };
