'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=622 lang=javascript
 *
 * [622] Design Circular Queue
 */
class MyCircularQueue {
  constructor(k) {
    this.head = 0;
    this.tail = -1;
    this.length = 0;
    this.queue = [];
    this.max = k;
    return this;
  }
  enQueue(value) {
    if (this.isFull()) return false;
    this.tail = (this.tail + 1) % this.max;
    this.queue[this.tail] = value;
    this.length++;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) return false;
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.max;
    this.length--;
    return true;
  }
  Front() {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }
  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.tail];
  }
  isEmpty() {
    return this.length === 0;
  }
  isFull() {
    return this.length === this.max;
  }
}
exports.MyCircularQueue = MyCircularQueue;
