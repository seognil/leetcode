import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

import { Node } from './solution';

type MaybeNode = Node | null;

const makeCase = (arr: [number, number | null][]) => {
  const map = new Map<number, Node>();

  const getNode = (index: number): Node => {
    if (!map.has(index)) map.set(index, new Node());
    return map.get(index)!;
  };

  arr.forEach(([val, random], i) => {
    const node = getNode(i);
    node.val = val;
    if (i != arr.length - 1) node.next = getNode(i + 1);
    if (random !== null) node.random = getNode(random);
  });

  const head = getNode(0);

  return { input: head, output: head };
};

type Input = MaybeNode;
type Output = MaybeNode;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  makeCase([
    [7, null],
    [13, 0],
    [11, 4],
    [10, 2],
    [1, 0],
  ]),

  makeCase([
    [1, 1],
    [2, 1],
  ]),

  makeCase([
    [3, null],
    [3, 0],
    [3, null],
  ]),

  {
    input: null,
    output: null,
  },
]);

// * ------------------------------------------------

import { copyRandomList } from './solution';
testRunner(cases, copyRandomList);
