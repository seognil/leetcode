export interface MinStackConstructor {
  new (): MinStackClass;
}
export interface MinStackClass {
  push(x: number): void;
  pop(): void;
  top(): number;
  getMin(): number;
}
