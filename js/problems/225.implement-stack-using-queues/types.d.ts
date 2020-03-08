export interface MyStackConstructor {
  new (): MyStackClass;
}
export interface MyStackClass {
  push(x: number): void;
  pop(): number;
  top(): number;
  empty(): boolean;
}
