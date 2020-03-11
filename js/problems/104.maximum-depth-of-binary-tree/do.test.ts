import { TreeNode } from './../../structures/tree/tree-node';
import { arrayToTree } from './../../structures/tree/tree-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = TreeNode | null;
type Output = number;

const a2t = arrayToTree;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2t([3, 9, 20, null, null, 15, 7]),
    output: 3,
  },
  {
    input: a2t([]),
    output: 0,
  },
  {
    input: a2t([1]),
    output: 1,
  },
]);

// * ------------------------------------------------

import { maxDepth } from './solution';
testRunner(cases, maxDepth);
