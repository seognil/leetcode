import { GraphNode, graphToArray, arrayToGraph } from './array-graph';

describe('', () => {
  const g1: GraphNode = { val: 1, neighbors: [] };
  const g2: GraphNode = { val: 2, neighbors: [] };
  const g3: GraphNode = { val: 3, neighbors: [] };
  const g4: GraphNode = { val: 4, neighbors: [] };

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
  test('graphToArray null', () => {
    expect(graphToArray(null)).toEqual([]);
  });

  test('graphToArray', () => {
    expect(arrayToGraph(arr)).toEqual(g1);
  });
  test('graphToArray null', () => {
    expect(arrayToGraph([])).toEqual(null);
  });
});
