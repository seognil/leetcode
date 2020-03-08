'use strict';
/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  // * ['48 ms', '88.89 %', '33.8 MB', '83.33 %']
  const resultArr = [''];
  const timesStack = [];
  let times = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!Number.isNaN(Number(char))) {
      times = 10 * times + Number(char);
    } else if (char === '[') {
      timesStack.push(times);
      resultArr.push('');
      times = 0;
    } else if (char === ']') {
      const times = timesStack.pop();
      const subStr = resultArr.pop();
      resultArr[resultArr.length - 1] += subStr.repeat(times);
    } else {
      resultArr[resultArr.length - 1] += char;
    }
  }
  return resultArr[0];
};
exports.decodeString = decodeString;
