'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
// @lc code=start
/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }
  push(x) {
    this.stack.push(x);
    this.minStack.push(Math.min(x, this.getMin()));
  }
  pop() {
    this.stack.pop();
    this.minStack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
exports.MinStack = MinStack;
