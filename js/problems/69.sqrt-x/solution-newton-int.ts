/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

type Int = number;

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x: Int): Int => {
  // * ['68 ms', '88.05 %', '35.5 MB', '94.44 %']
  // * find interger sqrt
  // * Newton's method, mock int divide

  if (x < 2) return x;

  let cur: Int = x;

  while (true) {
    const next: Int = divide(cur + divide(x, cur), 2);
    if (next >= cur) break;
    cur = next;
  }

  return cur;
};

const divide = (x: Int, y: Int): Int => Math.floor(x / y);

// @lc code=end

export { mySqrt };
