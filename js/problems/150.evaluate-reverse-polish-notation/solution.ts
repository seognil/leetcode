/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens: string[]): number => {
  // * ['64 ms', '74.06 %', '36.4 MB', '100 %']
  const resultStack: (number | string)[] = [];

  const math: Record<string, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => ~~(a / b),
  };

  for (let i = 0; i < tokens.length; i++) {
    const c = tokens[i];
    const op = math[c];
    if (op!) {
      const b = resultStack.pop() as number;
      const a = resultStack.pop() as number;
      resultStack.push(op(a, b));
    } else {
      resultStack.push(Number(c));
    }
  }

  return resultStack[0] as number;
};
// @lc code=end

export { evalRPN };
