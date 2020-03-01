import { CircularQueue } from './types';
/*
 * @lc app=leetcode id=622 lang=javascript
 *
 * [622] Design Circular Queue
 */

class MyCircularQueue implements CircularQueue {
  private head = 0;
  private tail = -1;
  private max: number;
  private length = 0;
  private queue: (number | null)[] = [];

  constructor(k: number) {
    this.max = k;
    return this;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    this.tail = (this.tail + 1) % this.max;
    this.queue[this.tail] = value;
    this.length++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.max;
    this.length--;

    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.head]!;
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.queue[this.tail]!;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  isFull(): boolean {
    return this.length === this.max;
  }
}
export { MyCircularQueue };
