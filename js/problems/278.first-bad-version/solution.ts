/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

type IsBadVersion = (n: number) => boolean;

/**
 * @param {integer} n Total versions
 * @return {integer} The first bad version
 */
type Checker = (n: number) => number;

type Solution = (isBadVersion: IsBadVersion) => Checker;

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution: Solution = (isBadVersion) => (n) => {
  // * ['48 ms', '88.25 %', '33.7 MB', '76.92 %']

  let left = 1;
  let right = n;

  while (left < right) {
    let pivot = ~~((right + left) / 2);

    if (isBadVersion(pivot)) {
      right = pivot;
    } else {
      left = pivot + 1;
    }
  }
  return right;
};

// @lc code=end

export { solution };
