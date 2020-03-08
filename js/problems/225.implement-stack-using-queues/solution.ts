/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
const MyStack = function() {
  // * ['52 ms', '76.47 %', '33.8 MB', '75 %']

  // @ts-ignore
  this.arr = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x: number): void {
  this.arr.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function(): number {
  return this.arr.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function(): number {
  return this.arr[this.arr.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function(): boolean {
  return this.arr.length < 1;
};

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
