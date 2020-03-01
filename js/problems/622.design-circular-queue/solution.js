'use strict';
/*
 * @lc app=leetcode id=622 lang=javascript
 *
 * [622] Design Circular Queue
 */
Object.defineProperty(exports, '__esModule', { value: true });
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  // @ts-ignore
  this.head = 0;
  // @ts-ignore
  this.tail = -1;
  // @ts-ignore
  this.max = k;
  // @ts-ignore
  this.length = 0;
};
exports.MyCircularQueue = MyCircularQueue;
/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  this.tail = (this.tail + 1) % this.max;
  this[this.tail] = value;
  this.length++;
  return true;
};
/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  this[this.head] = null;
  this.head = (this.head + 1) % this.max;
  this.length--;
  return true;
};
/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this[this.head];
};
/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this[this.tail];
};
/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.length === 0;
};
/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.length === this.max;
};
