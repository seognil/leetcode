import { TreeNode } from './../../structures/tree/tree-node';
import { arrayToTree } from './../../structures/tree/tree-to-array';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [TreeNode | null, number];
type Output = number[][];

const a2t = arrayToTree;

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1

const tree = a2t([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1]);

const cases = makeTestCases<Input, Output>([
  //

  {
    input: [tree, 22],
    output: [
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ],
  },
  {
    input: [tree, 26],
    output: [[5, 8, 13]],
  },
  {
    input: [tree, 28],
    output: [],
  },
  {
    input: [a2t([]), 0],
    output: [],
  },
  {
    input: [a2t([1]), 1],
    output: [[1]],
  },
  {
    input: [a2t([0]), 1],
    output: [],
  },
]);

// * ------------------------------------------------

import { pathSum } from './solution';
testRunner(cases, pathSum);
