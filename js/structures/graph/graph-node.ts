export class GraphNode<T = any> {
  constructor(public val: T, public neighbors: GraphNode<T>[] = []) {}
}
