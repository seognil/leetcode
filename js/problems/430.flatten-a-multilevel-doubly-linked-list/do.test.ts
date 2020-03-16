import { testRunner, makeTestCases, makeTestCasesOfSingleInput } from '../../helper/test-helper';

// * ------------------------------------------------

class Node {
  constructor(
    public val: number = 0,
    public prev: MaybeNode = null,
    public next: MaybeNode = null,
    public child: MaybeNode = null,
  ) {}
}

const a2l = (arr: number[]): MaybeNode => {
  const root = new Node(0);

  let cur = root;
  arr.forEach((e) => {
    cur.next = new Node(e);
    cur.next.prev = cur;
    cur = cur.next;
  });

  if (root.next) root.next.prev = null;

  return root.next;
};

// * ------------------------------------------------

type MaybeNode = Node | null;

type Input = MaybeNode;
type Output = MaybeNode;

const cases = makeTestCasesOfSingleInput<Input, Output>([
  //
  {
    input: (() => {
      const n1 = a2l([1, 2, 3, 4, 5, 6]);
      const n2 = a2l([7, 8, 9, 10]);
      const n3 = a2l([11, 12]);
      n1!.next!.next!.child = n2;
      n2!.next!.child = n3;
      return n1;
    })(),
    output: a2l([1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]),
  },

  {
    input: (() => {
      const n1 = a2l([1, 2, 3]);
      const n2 = a2l([4, 5, 6]);
      const n3 = a2l([7, 8, 9]);
      n1!.next!.next!.child = n2;
      n2!.next!.next!.child = n3;
      return n1;
    })(),
    output: a2l([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  },

  {
    input: (() => {
      const n1 = a2l([1, 2, 3]);
      const n2 = a2l([4, 5, 6]);
      const n3 = a2l([7, 8, 9]);
      n1!.child = n2;
      n2!.child = n3;
      return n1;
    })(),
    output: a2l([1, 4, 7, 8, 9, 5, 6, 2, 3]),
  },

  {
    input: (() => {
      const n1 = a2l([1, 2]);
      const n2 = a2l([3, 4]);
      const n3 = a2l([5, 6]);
      const n4 = a2l([7, 8]);
      const n5 = a2l([9, 10]);
      n1!.child = n2;
      n1!.next!.child = n3;
      n2!.child = n4;
      n2!.next!.child = n5;
      return n1;
    })(),
    output: a2l([1, 3, 7, 8, 4, 9, 10, 2, 5, 6]),
  },

  {
    input: a2l([1, 2, 3, 4, 5]),
    output: a2l([1, 2, 3, 4, 5]),
  },

  {
    input: a2l([]),
    output: a2l([]),
  },
]);

// * ------------------------------------------------

import { flatten } from './solution';
testRunner(cases, flatten);
