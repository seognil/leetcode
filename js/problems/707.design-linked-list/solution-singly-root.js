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
    // * ['112 ms', '91.18 %', '42.2 MB', '100 %']
    // * singly, simple code but slow
    this.root = { val: 0, next: null };
    this.length = 0;
  }
  get(index) {
    if (index < 0 || this.length <= index) return -1;
    let cur = this.root.next;
    for (let i = 0; i < index; i++) cur = cur.next;
    return cur.val;
  }
  addAtHead(val) {
    this.root.next = { val, next: this.root.next };
    this.length++;
  }
  addAtTail(val) {
    let cur = this.root;
    while (cur.next) cur = cur.next;
    cur.next = { val, next: null };
    this.length++;
  }
  addAtIndex(index, val) {
    if (index < 0 || this.length < index) return;
    let cur = this.root;
    for (let i = 0; i < index; i++) cur = cur.next;
    cur.next = { val, next: cur.next };
    this.length++;
  }
  deleteAtIndex(index) {
    if (index < 0 || this.length <= index) return;
    let cur = this.root;
    for (let i = 0; i < index; i++) cur = cur.next;
    cur.next = cur.next.next;
    this.length--;
  }
}
exports.MyLinkedList = MyLinkedList;
