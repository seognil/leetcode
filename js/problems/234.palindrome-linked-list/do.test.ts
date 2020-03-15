import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = ListNode | null;
type Output = boolean;

const a2l = arrayToList;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2l([1, 2]),
    output: false,
  },
  {
    input: a2l([1, 2, 2, 1]),
    output: true,
  },
  {
    input: a2l([1, 2, 3, 2, 1]),
    output: true,
  },
  {
    input: a2l([1]),
    output: true,
  },
  {
    input: a2l([]),
    output: true,
  },
]);

// * ------------------------------------------------

import { isPalindrome } from './solution';
testRunner(cases, isPalindrome);

import { isPalindrome as unsafe } from './solution-unsafe';
testRunner(cases, unsafe, 'unsafe');
