/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s: string): boolean => {
  const stack = [];

  const match: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (match[e]) {
      // * fast failed
      if (stack.pop() != match[e]) return false;
    } else {
      stack.push(e);
    }
  }

  return stack.length === 0;
};

export { isValid };
