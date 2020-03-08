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
  // * ---------------- failed cases, change nothing
  if (image.length < 1 || image[0].length < 1) return image;
  if (newColor === image[sr][sc]) return image;
  const maxR = image.length;
  const maxC = image[0].length;
  const inRange = (r, c) => 0 <= r && r < maxR && 0 <= c && c < maxC;
  // * ---------------- dfs walking
  const checkList = [[sr, sc]];
  const originColor = image[sr][sc];
  while (checkList.length) {
    const [curR, curC] = checkList.pop();
    if (inRange(curR, curC) && image[curR][curC] === originColor) {
      image[curR][curC] = newColor;
      checkList.push([curR + 1, curC]);
      checkList.push([curR - 1, curC]);
      checkList.push([curR, curC + 1]);
      checkList.push([curR, curC - 1]);
    }
  }
  return image;
};
exports.floodFill = floodFill;
