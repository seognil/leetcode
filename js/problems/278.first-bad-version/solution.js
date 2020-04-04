'use strict';
/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => (n) => {
  // * ['48 ms', '88.25 %', '33.7 MB', '76.92 %']
  let left = 1;
  let right = n;
  while (left < right) {
    let mid = ~~((right + left) / 2);
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
exports.solution = solution;