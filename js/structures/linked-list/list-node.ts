export class ListNode<T = any> {
  constructor(public val: T, public next: ListNode<T> | null = null) {}
}
