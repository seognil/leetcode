/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s: string): string => {
  if (s.length < 2) return s;

  let [r1, r2, max] = [0, 0, 0];
  const end = s.length - 1;

  const search = (s: string, a: number, b: number) => {
    while (0 <= a && b <= end && s[a] === s[b]) {
      if (b - a > max) {
        [r1, r2, max] = [a, b, b - a];
      }
      a--;
      b++;
    }
  };

  for (let i = 0; i <= end - 2; i++) {
    search(s, i, i + 1);
    search(s, i, i + 2);
  }
  search(s, end - 1, end);

  return s.slice(r1, r2 + 1);
};
// @lc code=end

export { longestPalindrome };
