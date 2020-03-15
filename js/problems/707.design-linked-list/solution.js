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
    // * ['112 ms', '91.6 %', '42 MB', '100 %']
    // * doubly, more code but faster
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  addfromEmpty(val) {
    this.head = this.tail = { val, next: null, prev: null };
    this.length = 1;
  }
  addAtHead(val) {
    if (this.length === 0) return this.addfromEmpty(val);
    this.head = { val, next: this.head, prev: null };
    this.head.next.prev = this.head;
    this.length++;
  }
  addAtTail(val) {
    if (this.length === 0) return this.addfromEmpty(val);
    this.tail = { val, next: null, prev: this.tail };
    this.tail.prev.next = this.tail;
    this.length++;
  }
  getNodeAt(index) {
    let p;
    if (index < this.length / 2) {
      p = this.head;
      for (let i = 0; i < index; i++) p = p.next;
    } else {
      p = this.tail;
      for (let i = this.length - 1; i > index; i--) p = p.prev;
    }
    return p;
  }
  get(index) {
    if (index < 0 || this.length <= index) return -1;
    return this.getNodeAt(index).val;
  }
  addAtIndex(index, val) {
    if (index < 0 || this.length < index) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);
    const n3 = this.getNodeAt(index);
    const n1 = n3.prev;
    const n2 = { val, next: n3, prev: n1 };
    n1.next = n2;
    n3.prev = n2;
    this.length++;
  }
  deleteAtIndex(index) {
    if (index < 0 || this.length <= index) return;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      const cur = this.getNodeAt(index);
      cur.prev.next = cur.next;
      cur.next.prev = cur.prev;
    }
    this.length--;
  }
}
exports.MyLinkedList = MyLinkedList;
