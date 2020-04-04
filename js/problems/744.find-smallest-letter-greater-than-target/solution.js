'use strict';
/*
 * @lc app=leetcode id=744 lang=javascript
 *
 * [744] Find Smallest Letter Greater Than Target
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = (letters, target) => {
  // * ['60 ms', '82.59 %', '36.2 MB', '100 %']
  let left = 0;
  let right = letters.length - 1;
  while (left < right) {
    const mid = ~~((left + right) / 2);
    const c = letters[mid];
    if (c <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left === right && letters[left] > target ? letters[left] : letters[0];
};
exports.nextGreatestLetter = nextGreatestLetter;
