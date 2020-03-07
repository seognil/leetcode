import { TreeNode } from './tree-node';
import { treeToArray, arrayToTree } from './tree-to-array';

describe('', () => {
  const t0 = new TreeNode(3);

  const t1 = new TreeNode(9);
  const t2 = new TreeNode(20);
  const t5 = new TreeNode(15);
  const t6 = new TreeNode(7);

  t0.left = t1;
  t0.right = t2;
  t2.left = t5;
  t2.right = t6;

  const arr = [3, 9, 20, null, null, 15, 7];

  test('treeToArray', () => {
    expect(treeToArray(t0)).toEqual(arr);
  });
  test('treeToArray null', () => {
    expect(treeToArray(null)).toEqual([]);
  });

  test('arrayToTree', () => {
    expect(arrayToTree(arr)).toEqual(t0);
  });
  test('arrayToTree null', () => {
    expect(arrayToTree([])).toEqual(null);
  });
});
