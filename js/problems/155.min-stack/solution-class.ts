import { MinStackClass } from './types.d';
/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
class MinStack implements MinStackClass {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }

  push(x: number): void {
    this.stack.push(x);
    this.minStack.push(Math.min(x, this.getMin()));
  }
  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }
  top(): number {
    return this.stack[this.stack.length - 1];
  }
  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

export { MinStack };
