/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

type MaybeNode = Node | null;

class Node {
  constructor(
    public val: number = 0,
    public next: MaybeNode = null,
    public random: MaybeNode = null,
  ) {}
}

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head: MaybeNode): MaybeNode => {
  // * ['52 ms', '90.58 %', '35.7 MB', '100 %']

  if (head === null) return null;

  const map = new Map<Node, Node>();

  let cur: MaybeNode = head;

  const mirrorOf = (node: Node): Node => {
    if (!map.has(node)) map.set(node, new Node(node.val));
    return map.get(node)!;
  };

  while (cur) {
    const newNode = mirrorOf(cur);
    if (cur.next) newNode.next = mirrorOf(cur.next);
    if (cur.random) newNode.random = mirrorOf(cur.random);

    cur = cur.next;
  }

  return map.get(head)!;
};
// @lc code=end

export { Node, copyRandomList };
