'use strict';
/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  // * ['104 ms', '77.21 %', '44.3 MB', '50 %']
  // @ts-ignore
  this.stack = [];
  // @ts-ignore
  this.minStack = [Infinity];
};
exports.MinStack = MinStack;
/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  this.minStack.push(Math.min(x, this.getMin()));
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};
/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};
/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
};
