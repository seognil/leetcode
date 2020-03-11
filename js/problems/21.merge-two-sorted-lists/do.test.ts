import { arrayToLink } from './../../structures/link/link-to-array';
import { LinkNode } from '../../structures/link/link-node';

import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [LinkNode | null, LinkNode | null];
type Output = LinkNode | null;

const a2l = arrayToLink;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [a2l([1, 2, 4]), a2l([1, 3, 4])],
    output: a2l([1, 1, 2, 3, 4, 4]),
  },
  {
    input: [a2l([1, 2, 3, 7, 8, 9]), a2l([4, 5, 6])],
    output: a2l([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  },
  {
    input: [a2l([1, 2, 4]), a2l([])],
    output: a2l([1, 2, 4]),
  },
  {
    input: [a2l([]), a2l([])],
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { mergeTwoLists } from './solution';
testRunner(cases, mergeTwoLists);
