/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num < 1) return false;

  while (~~(num / 2) === num / 2) num /= 2;
  while (~~(num / 3) === num / 3) num /= 3;
  while (~~(num / 5) === num / 5) num /= 5;

  return num === 1;
};
