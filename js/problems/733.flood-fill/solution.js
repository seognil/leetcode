'use strict';
/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
  // * ['68 ms', '95.48 %', '37.5 MB', '50 %']
  // * (arguments are all safe, no more error checking)
  // * ---------------- change nothing
  const originColor = image[sr][sc];
  if (newColor === originColor) return image;
  // * ---------------- dfs walking
  const maxR = image.length;
  const maxC = image[0].length;
  const checkList = [[sr, sc]];
  while (checkList.length) {
    const [r, c] = checkList.pop();
    const inRange = 0 <= r && r < maxR && 0 <= c && c < maxC;
    if (inRange && image[r][c] === originColor) {
      image[r][c] = newColor;
      checkList.push([r + 1, c]);
      checkList.push([r - 1, c]);
      checkList.push([r, c + 1]);
      checkList.push([r, c - 1]);
    }
  }
  return image;
};
exports.floodFill = floodFill;
