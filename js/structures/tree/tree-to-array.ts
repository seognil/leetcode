import { TreeNode } from './tree-node';
type val = any;

type ArrayList = (val | null)[];

export const treeToArray = (tree: TreeNode | null): ArrayList => {
  if (tree === null) return [];

  const arr: ArrayList = [];
  const queue: [TreeNode, number][] = [[tree, 0]];

  while (queue.length) {
    const [node, index] = queue.pop()!;

    arr[index] = node.val;

    node.left !== null && queue.push([node.left, index * 2 + 1]);
    node.right !== null && queue.push([node.right, index * 2 + 2]);
  }

  // * fullfill empty slots
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) arr[i] = null;
  }

  return arr;
};

export const arrayToTree = (arr: ArrayList, index = 0): TreeNode | null => {
  const crossBoundary = arr[index] === undefined;
  if (arr[index] === null || crossBoundary) return null;

  return new TreeNode(
    arr[index]!,
    arrayToTree(arr, index * 2 + 1),
    arrayToTree(arr, index * 2 + 2),
  );
};

export const fixTreeArray = (arr: ArrayList): ArrayList => {
  let result: ArrayList = [...arr];

  for (let i = 1; i < result.length; i++) {
    const e = result[i];
    const parentIndex = ~~((i - 1) / 2);
    if (e !== null && result[parentIndex] === null) {
      result = [...result.slice(0, i), null, ...result.slice(i)];
    }
  }

  return result;
};

export const arrayToTreeWithAutoFix = (arr: ArrayList): TreeNode | null =>
  arrayToTree(fixTreeArray(arr));
