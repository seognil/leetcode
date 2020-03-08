import { MyQueueClass } from './types.d';
/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyQueue implements MyQueueClass {
  // * ['48 ms', '90.58 %', '33.6 MB', '100 %']

  private arr: number[] = [];

  push(x: number) {
    this.arr.push(x);
  }
  pop() {
    return this.arr.shift()!;
  }
  peek() {
    return this.arr[0];
  }
  empty() {
    return this.arr.length < 1;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

export { MyQueue };
