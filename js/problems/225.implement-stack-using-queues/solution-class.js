'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */
// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyStack {
  constructor() {
    // * ['48 ms', '90.81 %', '33.9 MB', '50 %']
    this.arr = [];
  }
  push(x) {
    this.arr.push(x);
  }
  pop() {
    return this.arr.pop();
  }
  top() {
    return this.arr[this.arr.length - 1];
  }
  empty() {
    return this.arr.length < 1;
  }
}
exports.MyStack = MyStack;
