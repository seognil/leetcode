/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

type Int = number;
type Double = number;

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x: Int): Int => {
  // * ['64 ms', '94.8 %', '35.8 MB', '33.33 %']
  // * find interger sqrt
  // * Newton's method

  if (x < 2) return x;

  let cur: Double = x;

  while (true) {
    const next: Double = (cur + x / cur) / 2;
    if (Math.abs(next - cur) < 1e-6) break;
    cur = next;
  }

  return Math.floor(cur) as Int;
};

// @lc code=end

export { mySqrt };
