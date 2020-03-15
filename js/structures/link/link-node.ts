export class LinkNode<T = any> {
  constructor(
    public val: T,
    public next: LinkNode<T> | null = null,
    public prev?: LinkNode<T> | null,
  ) {}
}
