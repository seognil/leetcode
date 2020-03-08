export interface MyQueueConstructor {
  new (): MyQueueClass;
}
export interface MyQueueClass {
  push(x: number): void;
  pop(): number;
  peek(): number;
  empty(): boolean;
}
