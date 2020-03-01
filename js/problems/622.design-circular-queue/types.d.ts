export interface CircularQueueConstructor {
  new (k: number): CircularQueue;
}
export interface CircularQueue {
  enQueue(value: number): boolean;
  deQueue(): boolean;
  Front(): number;
  Rear(): number;
  isEmpty(): boolean;
  isFull(): boolean;
}
