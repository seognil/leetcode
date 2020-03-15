'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */
// @lc code=start
class MyLinkedList {
  constructor() {
    // * ['116 ms', '82.77 %', '42.3 MB', '100 %']
    // * singly, head and tail, but not so good
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addfromEmpty(val) {
    this.head = this.tail = { val, next: null };
  }
  addAtHead(val) {
    if (this.length === 0) {
      this.addfromEmpty(val);
    } else {
      this.head = { val, next: this.head };
    }
    this.length++;
  }
  addAtTail(val) {
    if (this.length === 0) {
      this.addfromEmpty(val);
    } else {
      this.tail = this.tail.next = { val, next: null };
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || this.length <= index) return -1;
    let cur = this.head;
    for (let i = 0; i < index; i++) cur = cur.next;
    return cur.val;
  }
  addAtIndex(index, val) {
    if (index < 0 || this.length < index) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);
    let cur = this.head;
    for (let i = 1; i < index; i++) cur = cur.next;
    cur.next = { val, next: cur.next };
    this.length++;
  }
  deleteAtIndex(index) {
    if (index < 0 || this.length <= index) return;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let cur = this.head;
      for (let i = 1; i < index; i++) cur = cur.next;
      cur.next = cur.next.next;
      if (index === this.length - 1) this.tail = cur;
    }
    this.length--;
  }
}
exports.MyLinkedList = MyLinkedList;
