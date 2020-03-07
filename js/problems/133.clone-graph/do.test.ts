import { arrayToGraph, graphToArray } from './../../structures/graph/graph-to-array';
import { GraphNode } from '../../structures/graph/graph-node';
import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

type ArrayList = number[][];

const flatCases: { input: ArrayList; output: ArrayList }[] = [
  //
  {
    input: [
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ],
    output: [
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ],
  },
  {
    input: [[]],
    output: [[]],
  },
  {
    input: [],
    output: [],
  },
];

type Input = GraphNode | null;
type Output = GraphNode | null;

const cases = makeTestCasesOfSingleInput<Input, Output>(
  flatCases.map(({ input, output }) => ({
    input: arrayToGraph(input),
    output: arrayToGraph(output),
  })),
);

// * ------------------------------------------------

import { cloneGraph } from './solution';
testRunner(cases, cloneGraph);
