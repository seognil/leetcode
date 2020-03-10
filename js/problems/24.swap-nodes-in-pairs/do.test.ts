import { LinkNode } from './../../structures/link/link-node';
import { arrayToLink } from './../../structures/link/link-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = LinkNode | null;
type Output = LinkNode | null;

const a2l = arrayToLink;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2l([1, 2, 3, 4]),
    output: a2l([2, 1, 4, 3]),
  },
  {
    input: a2l([1]),
    output: a2l([1]),
  },
  {
    input: a2l([1, 2, 3]),
    output: a2l([2, 1, 3]),
  },
  {
    input: a2l([]),
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { swapPairs } from './solution';
testRunner(cases, swapPairs);

import { ListNode } from './solution';
test('new will success', () => {
  expect(new ListNode(2)).toBeInstanceOf(ListNode);
});
