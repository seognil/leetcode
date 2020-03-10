import { LinkNode } from './../../structures/link/link-node';
import { arrayToLink } from './../../structures/link/link-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [LinkNode | null, number, number];
type Output = LinkNode | null;

const a2l = arrayToLink;

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

import { reverseBetween as noRoot } from './solution-no-root';
testRunner(cases, noRoot, 'noRoot');
