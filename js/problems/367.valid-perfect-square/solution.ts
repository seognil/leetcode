/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num: number): boolean => {
  // * ['44 ms', '98.21 %', '33.7 MB', '75 %']

  if (num === 1) return true;

  let left = 2;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const val = mid ** 2;
    if (val < num) {
      left = mid + 1;
    } else if (val > num) {
      right = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};

// @lc code=end

export { isPerfectSquare };
