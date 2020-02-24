/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // * newton
  let e = x,
    last = Infinity;

  while (last > e) {
    last = e;
    e = ~~((e + x / e) / 2);
  }

  return e > last ? last : e;
};
