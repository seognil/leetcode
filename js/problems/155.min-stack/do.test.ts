import { MinStackClass, MinStackConstructor } from './types.d';

// * ------------------------------------------------

const testRunnerRaw = (MinStack: MinStackConstructor) => {
  const minStack = new MinStack();

  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  expect(minStack.getMin()).toEqual(-3);
  minStack.pop();
  expect(minStack.top()).toEqual(0);
  expect(minStack.getMin()).toEqual(-2);
};

// * ------------------------------------------------

import { MinStack as MinStackFn } from './solution';
import { MinStack } from './solution-class';

test('MinStack function version', () => {
  // @ts-ignore
  testRunnerRaw(MinStackFn as MinStackConstructor);
});

test('MinStack class version', () => {
  testRunnerRaw(MinStack);
});
