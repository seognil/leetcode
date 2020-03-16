import { ListNode } from '../../structures/linked-list/list-node';
import { arrayToList } from '../../structures/linked-list/list-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [ListNode | null, number, number];
type Output = ListNode | null;

const a2l = arrayToList;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [a2l([1, 2, 3, 4, 5, 6, 7]), 3, 5],
    output: a2l([1, 2, 5, 4, 3, 6, 7]),
  },
  {
    input: [a2l([1, 2, 3, 4]), 1, 1],
    output: a2l([1, 2, 3, 4]),
  },
  {
    input: [a2l([1, 2, 3, 4]), 1, 3],
    output: a2l([3, 2, 1, 4]),
  },
  {
    input: [a2l([1, 2, 3, 4]), 2, 4],
    output: a2l([1, 4, 3, 2]),
  },
  {
    input: [a2l([1, 2, 3, 4]), 1, 4],
    output: a2l([4, 3, 2, 1]),
  },
]);

// * ------------------------------------------------

import { reverseBetween } from './solution';
testRunner(cases, reverseBetween);

import { reverseBetween as noDummy } from './solution-no-dummy';
testRunner(cases, noDummy, 'noDummy');
