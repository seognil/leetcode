import { MyStackClass, MyStackConstructor } from './types.d';

// * ------------------------------------------------

const testRunnerRaw = (MyStack: MyStackConstructor) => {
  const stack = new MyStack();

  stack.push(1);
  stack.push(2);
  expect(stack.top()).toEqual(2);
  expect(stack.pop()).toEqual(2);
  expect(stack.empty()).toEqual(false);

  expect(stack.pop()).toEqual(1);
  expect(stack.empty()).toEqual(true);
};

// * ------------------------------------------------

import { MyStack as MyStackFn } from './solution';
import { MyStack } from './solution-class';

test('MyStack function version', () => {
  // @ts-ignore
  testRunnerRaw(MyStackFn as MyStackConstructor);
});

test('MyStack class version', () => {
  testRunnerRaw(MyStack);
});
