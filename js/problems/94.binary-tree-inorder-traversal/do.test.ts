import { arrayToTree, fixTreeArray } from './../../structures/tree/tree-to-array';
import { TreeNode } from './../../structures/tree/tree-node';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type TreeFlatten = (number | null)[];
type ItemList = number[];

const flatCases: { input: TreeFlatten; output: ItemList }[] = [
  //
  {
    input: [1, null, 2, 3],
    output: [1, 3, 2],
  },
  {
    input: [null],
    output: [],
  },
];

type Input = TreeNode | null;
type Output = ItemList;

const cases = makeTestCasesOfSingleInput<Input, Output>(
  flatCases.map(({ input, output }) => ({
    input: arrayToTree(fixTreeArray(input)),
    output,
  })),
);

// * ------------------------------------------------

import { inorderTraversal as recur } from './solution-recursive';
import { inorderTraversal as dfs } from './solution';
testRunner(cases, recur, 'recur');
testRunner(cases, dfs, 'dfs');
