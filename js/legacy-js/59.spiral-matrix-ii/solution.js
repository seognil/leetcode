/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n < 1) return [];

  const result = Array.from({ length: n }, () => Array(n));

  let count = 0;
  let r = 0,
    c = -1,
    loop = n;

  while (loop > 0) {
    for (let i = 0; i < loop; i++) result[r][++c] = ++count;
    for (let i = 0; i < loop - 1; i++) result[++r][c] = ++count;
    for (let i = 0; i < loop - 1; i++) result[r][--c] = ++count;
    for (let i = 0; i < loop - 2; i++) result[--r][c] = ++count;

    loop -= 2;
  }

  return result;
};
