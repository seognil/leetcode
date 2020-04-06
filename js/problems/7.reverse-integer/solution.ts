/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x: number): number => {
  // * ['64 ms', '96.6 %', '35.5 MB', '92.71 %']

  if (x == 0) return 0;

  const sign = Math.sign(x);
  x = Math.abs(x);
  let result = 0;

  while (x !== 0) {
    result = result * 10 + (x % 10);
    x = ~~(x / 10);
  }

  if (result > ~(1 << 31) || result < 1 << 31) {
    return 0;
  } else {
    return sign * result;
  }
};
// @lc code=end

export { reverse };
