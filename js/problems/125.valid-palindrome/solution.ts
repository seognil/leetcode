/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s: string): boolean => {
  // * ['60 ms', '96.8 %', '40.5 MB', '21.74 %']

  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    while (/\W/.test(s[p1])) p1++;
    while (/\W/.test(s[p2])) p2--;

    if (s[p1] === s[p2] || s[p1].toLowerCase() === s[p2].toLowerCase()) {
      p1++;
      p2--;
      continue;
    }

    return false;
  }

  return true;
};
// @lc code=end

export { isPalindrome };
