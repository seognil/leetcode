import { TreeNode, treeToArray, arrayToTree } from './array-tree';

describe('', () => {
  const tree: TreeNode = {
    val: 3,
    left: {
      val: 9,
      left: null,
      right: null,
    },
    right: {
      val: 20,
      left: {
        val: 15,
        left: null,
        right: null,
      },
      right: {
        val: 7,
        left: null,
        right: null,
      },
    },
  };

  const arr = [3, 9, 20, null, null, 15, 7];

  test('treeToArray', () => {
    expect(treeToArray(tree)).toEqual(arr);
  });
  test('treeToArray null', () => {
    expect(treeToArray(null)).toEqual([]);
  });

  test('arrayToTree', () => {
    expect(arrayToTree(arr)).toEqual(tree);
  });
  test('arrayToTree null', () => {
    expect(arrayToTree([])).toEqual(null);
  });
});
