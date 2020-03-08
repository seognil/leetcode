import { MyQueueClass, MyQueueConstructor } from './types.d';

// * ------------------------------------------------

const testRunnerRaw = (MyQueue: MyQueueConstructor) => {
  const queue = new MyQueue();

  queue.push(1);
  queue.push(2);

  expect(queue.peek()).toEqual(1);
  expect(queue.pop()).toEqual(1);
  expect(queue.empty()).toEqual(false);

  expect(queue.pop()).toEqual(2);
  expect(queue.empty()).toEqual(true);
};

// * ------------------------------------------------

import { MyQueue as MyQueueFn } from './solution';
import { MyQueue } from './solution-class';

test('MyQueue function version', () => {
  // @ts-ignore
  testRunnerRaw(MyQueueFn as MyQueueConstructor);
});

test('MyQueue class version', () => {
  testRunnerRaw(MyQueue);
});
