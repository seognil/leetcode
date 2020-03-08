'use strict';
/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * Initialize your data structure here.
 */
const MyStack = function() {
  // * ['52 ms', '76.47 %', '33.8 MB', '75 %']
  // @ts-ignore
  this.arr = [];
};
exports.MyStack = MyStack;
/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.arr.push(x);
};
/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.arr.pop();
};
/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.arr[this.arr.length - 1];
};
/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.arr.length < 1;
};
