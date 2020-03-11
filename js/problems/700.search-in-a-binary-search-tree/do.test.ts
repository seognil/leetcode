import { arrayToTree } from '../../structures/tree/tree-to-array';
import { TreeNode } from './../../structures/tree/tree-node';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = [TreeNode | null, number];
type Output = TreeNode | null;

const a2t = arrayToTree;

const cases = makeTestCases<Input, Output>([
  //
  {
    input: [a2t([4, 2, 7, 1, 3]), 2],
    output: a2t([2, 1, 3]),
  },
  {
    input: [a2t([4, 2, 7, 1, 3]), 5],
    output: a2t([]),
  },
  {
    input: [a2t([]), 5],
    output: a2t([]),
  },
]);

// * ------------------------------------------------

import { searchBST } from './solution-bfs';
testRunner(cases, searchBST);

import { searchBST as bfs } from './solution-bfs';
testRunner(cases, bfs, 'bfs');
