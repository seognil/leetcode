/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = (n: number): number => {
  // * ['52 ms', '73.49 %', '33.6 MB', '100 %']

  let left = 0;
  let right = n;

  let mid = 0;

  while (left <= right) {
    mid = ~~((left + right) / 2);
    // @ts-ignore
    const check = guess(mid);
    if (check === 1) {
      left = mid + 1;
    } else if (check === -1) {
      right = mid - 1;
    } else {
      break;
    }
  }

  return mid;
};
// @lc code=end

export { guessNumber };
