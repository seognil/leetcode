import { TreeNode } from './tree-node';
import { treeToArray, arrayToTree, fixTreeArray, arrayToTreeWithAutoFix } from './tree-to-array';

describe('null', () => {
  test('treeToArray null', () => {
    expect(treeToArray(null)).toEqual([]);
  });
  test('arrayToTree null', () => {
    expect(arrayToTree([])).toEqual(null);
  });
});

describe('normal case', () => {
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

  test('arrayToTree', () => {
    expect(arrayToTree(arr)).toEqual(t0);
  });
});

describe('fixTreeArray', () => {
  const glitchArr = [1, null, 2, 3];
  const correctArr = [1, null, 2, null, null, 3];
  test('fixTreeArray', () => {
    expect(fixTreeArray(glitchArr)).toEqual(correctArr);
  });
});

describe('glitch case manually fixed', () => {
  const t0 = new TreeNode(1);

  const t2 = new TreeNode(2);
  const t3 = new TreeNode(3);

  t0.right = t2;
  t2.left = t3;

  const arr = fixTreeArray([1, null, 2, 3]);

  test('treeToArray', () => {
    console.log(treeToArray(t0));
    expect(treeToArray(t0)).toEqual(arr);
  });

  test('arrayToTree', () => {
    expect(arrayToTree(arr)).toEqual(t0);
  });
});

describe('glitch case auto fixed', () => {
  const t0 = new TreeNode(1);

  const t2 = new TreeNode(2);
  const t3 = new TreeNode(3);

  t0.right = t2;
  t2.left = t3;

  const arr = [1, null, 2, 3];

  test('treeToArray', () => {
    console.log(treeToArray(t0));
    expect(treeToArray(t0)).toEqual(fixTreeArray(arr));
  });

  test('arrayToTree', () => {
    expect(arrayToTreeWithAutoFix(arr)).toEqual(t0);
  });
});
