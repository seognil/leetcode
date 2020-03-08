'use strict';
/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */
Object.defineProperty(exports, '__esModule', { value: true });
// @lc code=start
/**
 * Initialize your data structure here.
 */
const MyQueue = function() {
  // * ['52 ms', '76.47 %', '33.8 MB', '75 %']
  // @ts-ignore
  this.arr = [];
};
exports.MyQueue = MyQueue;
/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.arr.push(x);
};
/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.arr.shift();
};
/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.arr[0];
};
/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.arr.length < 1;
};
