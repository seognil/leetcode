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
    input: a2t([2, 1, 3]),
    output: true,
  },
  {
    input: a2t([5, 1, 4, null, null, 3, 6]),
    output: false,
  },

  {
    input: a2t([1, 1]),
    output: false,
  },

  {
    input: null,
    output: true,
  },
]);

// * ------------------------------------------------

import { isValidBST as fancy } from './solution-fancy-inorder';
testRunner(cases, fancy, 'fancy');

import { isValidBST as ranger } from './solution-recursion-with-range';
testRunner(cases, ranger, 'ranger');

import { isValidBST } from './solution';
testRunner(cases, isValidBST);
