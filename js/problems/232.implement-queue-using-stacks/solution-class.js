'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */
// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    // * ['48 ms', '90.58 %', '33.6 MB', '100 %']
    this.arr = [];
  }
  push(x) {
    this.arr.push(x);
  }
  pop() {
    return this.arr.shift();
  }
  peek() {
    return this.arr[0];
  }
  empty() {
    return this.arr.length < 1;
  }
}
exports.MyQueue = MyQueue;
