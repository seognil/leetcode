/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 */
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  const d = (a, b) => Math.abs(a - b);
  const ii = (...arr) => {
    const intersect = d(arr[0], arr[1]) + d(arr[2], arr[3]) - (Math.max(...arr) - Math.min(...arr));
    return intersect > 0 ? intersect : 0;
  };
  return d(C, A) * d(D, B) + d(G, E) * d(H, F) - ii(A, C, E, G) * ii(B, D, F, H);
};
