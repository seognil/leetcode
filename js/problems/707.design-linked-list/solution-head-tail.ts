import { MyLinkedListClass, LinkNode } from './types';
/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start

class MyLinkedList implements MyLinkedListClass {
  // * ['116 ms', '82.77 %', '42.3 MB', '100 %']

  private head: LinkNode | null = null;
  private tail: LinkNode | null = null;
  private length = 0;

  constructor() {}

  get(index: number) {
    if (index < 0 || this.length <= index) return -1;

    let cur = this.head!;
    for (let i = 0; i < index; i++) cur = cur.next!;
    return cur.val;
  }

  private addfromEmpty(val: number): void {
    this.head = this.tail = { val, next: null };
  }

  addAtHead(val: number) {
    if (this.length === 0) {
      this.addfromEmpty(val);
    } else {
      this.head = { val, next: this.head };
    }

    this.length++;
  }

  addAtTail(val: number) {
    if (this.length === 0) {
      this.addfromEmpty(val);
    } else {
      this.tail = this.tail!.next = { val, next: null };
    }

    this.length++;
  }

  addAtIndex(index: number, val: number) {
    if (index < 0 || this.length < index) return;

    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);

    let cur = this.head!;
    for (let i = 1; i < index; i++) cur = cur.next!;
    cur.next = { val, next: cur.next };

    this.length++;
  }

  deleteAtIndex(index: number) {
    if (index < 0 || this.length <= index) return;

    if (this.length === 1 && index === 0) {
      this.head = this.tail = null;
      this.length = 0;
      return;
    }

    if (index === 0) {
      this.head = this.head!.next;
    } else {
      let cur = this.head!;
      for (let i = 1; i < index; i++) cur = cur.next!;
      cur.next = cur.next!.next;

      if (index === this.length - 1) this.tail = cur;
    }

    this.length--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

export { MyLinkedList };
