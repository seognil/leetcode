import { CircularQueueConstructor } from './types';

// * ------------------------------------------------

const testRunnerRaw = (MyCircularQueue: CircularQueueConstructor) => {
  const circularQueue = new MyCircularQueue(3);

  // * ---------------- empty

  expect(circularQueue.Front()).toEqual(-1);
  expect(circularQueue.Rear()).toEqual(-1);
  expect(circularQueue.isEmpty()).toEqual(true);
  expect(circularQueue.isFull()).toEqual(false);

  // * ---------------- enQueue to full

  expect(circularQueue.enQueue(1)).toEqual(true);
  expect(circularQueue.enQueue(2)).toEqual(true);
  expect(circularQueue.enQueue(3)).toEqual(true);

  expect(circularQueue.enQueue(4)).toEqual(false);

  expect(circularQueue.Front()).toEqual(1);
  expect(circularQueue.Rear()).toEqual(3);

  // * ---------------- deQueue once

  expect(circularQueue.isFull()).toEqual(true);
  expect(circularQueue.deQueue()).toEqual(true);
  expect(circularQueue.isFull()).toEqual(false);

  expect(circularQueue.Front()).toEqual(2);
  expect(circularQueue.Rear()).toEqual(3);

  // * ---------------- enQueue once

  expect(circularQueue.enQueue(4)).toEqual(true);

  expect(circularQueue.Front()).toEqual(2);
  expect(circularQueue.Rear()).toEqual(4);

  // * ---------------- deQueue to empty

  expect(circularQueue.isEmpty()).toEqual(false);

  expect(circularQueue.deQueue()).toEqual(true);
  expect(circularQueue.deQueue()).toEqual(true);
  expect(circularQueue.deQueue()).toEqual(true);
  expect(circularQueue.deQueue()).toEqual(false);

  expect(circularQueue.isEmpty()).toEqual(true);
};

// * ------------------------------------------------

import { MyCircularQueue as MyCircularQueueFn } from './solution';
import { MyCircularQueue as MyCircularQueueClass } from './solution-class';

test('MyCircularQueue function version', () => {
  // @ts-ignore
  testRunnerRaw(MyCircularQueueFn as CircularQueueConstructor);
});
test('MyCircularQueue class version', () => {
  testRunnerRaw(MyCircularQueueClass);
});
