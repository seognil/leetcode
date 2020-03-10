'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function(s) {
  // * ['104 ms', '98.39 %', '46.9 MB', '33.19 %']
  if (s.length < 2) return;
  const swap = (str, i, j) => {
    const t = str[i];
    str[i] = str[j];
    str[j] = t;
  };
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    swap(s, i, j);
    i++, j--;
  }
};
exports.reverseString = reverseString;
