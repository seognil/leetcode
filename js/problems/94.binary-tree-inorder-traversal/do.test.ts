import { arrayToTreeWithAutoFix } from './../../structures/tree/tree-to-array';
import { TreeNode } from './../../structures/tree/tree-node';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = TreeNode | null;
type Output = number[];

const a2tf = arrayToTreeWithAutoFix;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2tf([1, null, 2, 3]),
    output: [1, 3, 2],
  },
  {
    input: a2tf([null]),
    output: [],
  },
]);

// * ----------------

// * ------------------------------------------------

import { inorderTraversal as recur } from './solution-recursive';
import { inorderTraversal as dfs } from './solution';
testRunner(cases, recur, 'recur');
testRunner(cases, dfs, 'dfs');
