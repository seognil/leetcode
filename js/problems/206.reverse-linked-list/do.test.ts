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
    input: a2l([1, 2, 3, 4, 5]),
    output: a2l([5, 4, 3, 2, 1]),
  },
  {
    input: a2l([]),
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { reverseList } from './solution';
testRunner(cases, reverseList);
