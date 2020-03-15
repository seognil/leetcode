import { MyLinkedListClass, LinkNode } from './types';
/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start

class MyLinkedList implements MyLinkedListClass {
  // * ['112 ms', '91.18 %', '42.2 MB', '100 %']
  // * singly, simple code but slow

  private root: LinkNode = { val: 0, next: null };
  private length = 0;

  constructor() {}

  get(index: number) {
    if (index < 0 || this.length <= index) return -1;

    let cur = this.root.next!;
    for (let i = 0; i < index; i++) cur = cur.next!;
    return cur.val;
  }

  addAtHead(val: number) {
    this.root.next = { val, next: this.root.next };

    this.length++;
  }

  addAtTail(val: number) {
    let cur = this.root;
    while (cur.next) cur = cur.next;
    cur.next = { val, next: null };

    this.length++;
  }

  addAtIndex(index: number, val: number) {
    if (index < 0 || this.length < index) return;

    let cur = this.root;
    for (let i = 0; i < index; i++) cur = cur.next!;
    cur.next = { val, next: cur.next };

    this.length++;
  }

  deleteAtIndex(index: number) {
    if (index < 0 || this.length <= index) return;

    let cur = this.root;
    for (let i = 0; i < index; i++) cur = cur.next!;
    cur.next = cur.next!.next;

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
