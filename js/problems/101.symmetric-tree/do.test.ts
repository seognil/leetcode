import { TreeNode } from './../../structures/tree/tree-node';
import { arrayToTree } from './../../structures/tree/tree-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = TreeNode | null;
type Output = boolean;

const a2t = arrayToTree;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2t([1, 2, 2, 3, 4, 4, 3]),
    output: true,
  },
  {
    input: a2t([1, 2, 2, null, 3, null, 3]),
    output: false,
  },

  {
    input: a2t([1]),
    output: true,
  },
  {
    input: a2t([null]),
    output: true,
  },

  {
    input: a2t([1, 2, 3]),
    output: false,
  },
  {
    input: a2t([1, 2, 2, 2, null, 2]),
    output: false,
  },
]);

// * ------------------------------------------------

import { isSymmetric } from './solution';
testRunner(cases, isSymmetric);
