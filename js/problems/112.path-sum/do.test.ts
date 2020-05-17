import { TreeNode } from './../../structures/tree/tree-node';
import { arrayToTree } from './../../structures/tree/tree-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [TreeNode | null, number];
type Output = boolean;

const a2t = arrayToTree;

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1

const tree = a2t([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]);

const cases = makeTestCases<Input, Output>([
  //

  {
    input: [tree, 22],
    output: true,
  },
  {
    input: [tree, 26],
    output: true,
  },
  {
    input: [tree, 28],
    output: false,
  },
  {
    input: [a2t([]), 0],
    output: false,
  },
  {
    input: [a2t([1]), 1],
    output: true,
  },
  {
    input: [a2t([0]), 1],
    output: false,
  },
]);

// * ------------------------------------------------

import { hasPathSum } from './solution';
testRunner(cases, hasPathSum);
