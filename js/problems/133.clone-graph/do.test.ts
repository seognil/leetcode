import { arrayToGraph } from './../../structures/graph/graph-to-array';
import { GraphNode } from '../../structures/graph/graph-node';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type Input = GraphNode | null;
type Output = GraphNode | null;

const a2g = arrayToGraph;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: a2g([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]),
    output: a2g([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]),
  },
  {
    input: a2g([[]]),
    output: a2g([[]]),
  },
  {
    input: a2g([]),
    output: a2g([]),
  },
]);

// * ------------------------------------------------

import { cloneGraph } from './solution';
testRunner(cases, cloneGraph);

import { Node } from './solution';
test('`new Node()` will success', () => {
  expect(new Node()).toBeInstanceOf(Node);
});
