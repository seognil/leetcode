/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str: string): number => {
  // * ['64 ms', '97.6 %', '37.2 MB', '14.29 %']

  let p = 0;
  let sign = 1;
  let num = 0;

  while (/\s/.test(str[p])) p++;

  if (str[p] === '-') {
    sign = -1;
    p++;
  } else if (str[p] === '+') {
    p++;
  }

  if (/\D/.test(str[p])) return 0;

  while (p < str.length) {
    if (/\D/.test(str[p])) break;
    num = num * 10 + Number(str[p]);
    p++;
  }

  if (sign < 0) num = -num;

  return Math.max(1 << 31, Math.min(~(1 << 31), num));
};
// @lc code=end

export { myAtoi };
