type val = any;

export type TreeNode = {
  val: val;
  left: TreeNode | null;
  right: TreeNode | null;
};

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

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) arr[i] = null;
  }

  return arr;
};

export const arrayToTree = (arr: ArrayList, index = 0): TreeNode | null => {
  const crossBoundary = arr[index] === undefined;
  if (arr[index] === null || crossBoundary) return null;

  const node: TreeNode = {
    val: arr[index]!,
    left: arrayToTree(arr, index * 2 + 1),
    right: arrayToTree(arr, index * 2 + 2),
  };

  return node;
};
