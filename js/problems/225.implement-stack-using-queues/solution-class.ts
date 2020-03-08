import { MyStackClass } from './types.d';
/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class MyStack implements MyStackClass {
  // * ['48 ms', '90.81 %', '33.9 MB', '50 %']

  private arr: number[] = [];

  push(x: number) {
    this.arr.push(x);
  }
  pop() {
    return this.arr.pop()!;
  }
  top() {
    return this.arr[this.arr.length - 1];
  }
  empty() {
    return this.arr.length < 1;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

export { MyStack };
