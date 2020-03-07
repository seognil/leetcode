'use strict';
/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  // * ['64 ms', '74.06 %', '36.4 MB', '100 %']
  const resultStack = [];
  const math = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => ~~(a / b),
  };
  for (let i = 0; i < tokens.length; i++) {
    const c = tokens[i];
    const op = math[c];
    if (op) {
      const b = resultStack.pop();
      const a = resultStack.pop();
      resultStack.push(op(a, b));
    } else {
      resultStack.push(Number(c));
    }
  }
  return resultStack[0];
};
exports.evalRPN = evalRPN;
