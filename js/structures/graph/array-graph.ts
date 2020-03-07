type val = number;

export type GraphNode = {
  val: val;
  neighbors: GraphNode[];
};

type ArrayList = val[][];

export const graphToArray = (node: GraphNode | null): ArrayList => {
  if (node === null) return [];

  const visited = new Set<val>();
  const queue: GraphNode[] = [node];

  const arr: ArrayList = [];

  while (queue.length) {
    const node = queue.pop()!;
    const { val, neighbors } = node;

    arr[val - 1] = neighbors.map((node) => node.val);

    visited.add(val);
    neighbors.forEach((node) => {
      if (!visited.has(node.val)) {
        queue.push(node);
      }
    });
  }

  return arr;
};

export const arrayToGraph = (arr: ArrayList): GraphNode | null => {
  if (arr.length < 1) return null;

  const pool: Record<val, GraphNode> = {};

  arr.forEach((neighbors, i) => {
    const val = i + 1;
    const node: GraphNode = { val, neighbors: [] };
    pool[val] = node;
  });

  arr.forEach((neighbors, i) => {
    const val = i + 1;
    const node = pool[val];
    node.neighbors = neighbors.map((val) => pool[val] as GraphNode);
  });

  return pool[1];
};
