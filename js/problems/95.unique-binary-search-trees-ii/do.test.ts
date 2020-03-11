import { TreeNode } from './../../structures/tree/tree-node';
import { arrayToTreeWithAutoFix } from './../../structures/tree/tree-to-array';

import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = number;
type Output = TreeNode[];

const ma2tf = (e: (number | null)[]) => arrayToTreeWithAutoFix(e)!;

const n = null;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: 3,
    output: [
      [1, n, 2, n, n, n, 3],
      [1, n, 3, n, n, 2],
      [2, 1, 3],
      [3, 1, n, n, 2],
      [3, 2, n, 1],
    ].map(ma2tf),
  },
  {
    input: 2,
    output: [
      [1, null, 2],
      [2, 1],
    ].map(ma2tf),
  },
  {
    input: 0,
    output: [].map(ma2tf),
  },
]);

// * ------------------------------------------------

import { generateTrees } from './solution';
testRunner(cases, generateTrees);
