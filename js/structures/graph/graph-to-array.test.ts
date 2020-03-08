import { GraphNode } from './graph-node';
import { graphToArray, arrayToGraph } from './graph-to-array';

describe('null', () => {
  test('graphToArray null', () => {
    expect(graphToArray(null)).toEqual([]);
  });
  test('arrayToGraph null', () => {
    expect(arrayToGraph([])).toEqual(null);
  });
});

describe('normal case', () => {
  const g1 = new GraphNode(1);
  const g2 = new GraphNode(2);
  const g3 = new GraphNode(3);
  const g4 = new GraphNode(4);

  g1.neighbors = [g2, g4];
  g2.neighbors = [g1, g3];
  g3.neighbors = [g2, g4];
  g4.neighbors = [g1, g3];

  const arr = [
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ];

  test('graphToArray', () => {
    expect(graphToArray(g1)).toEqual(arr);
  });

  test('arrayToGraph', () => {
    expect(arrayToGraph(arr)).toEqual(g1);
  });
});

describe('one node case', () => {
  const g1 = new GraphNode(1);
  const arr = [[]];
  test('graphToArray empty', () => {
    expect(graphToArray(g1)).toEqual(arr);
  });
  test('arrayToGraph empty', () => {
    expect(arrayToGraph([[]])).toEqual(g1);
  });
});
