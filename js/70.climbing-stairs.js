/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n == 0) return 0;

  // * fibonacci
  let a = 1,
    b = 2,
    temp,
    i = 1;
  while (i < n) {
    temp = a + b;
    a = b;
    b = temp;
    i++;
  }

  return a;
};
