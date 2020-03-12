export interface LinkNode {
  val: number;
  next: LinkNode | null;
}

export interface MyLinkedListContructor {
  new (): MyLinkedListClass;
}

export interface MyLinkedListClass {
  get: (index: number) => number | -1;
  addAtHead: (val: number) => void;
  addAtTail: (val: number) => void;
  addAtIndex: (index: number, val: number) => void;
  deleteAtIndex: (index: number) => void;
}
