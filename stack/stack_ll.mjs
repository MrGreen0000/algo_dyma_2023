import { LinkedList } from "../linked_list/linked_list.mjs";

export class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.addFirst(value);
  }
  peek() {
    return this.list.get(0);
  }
  pop() {
    return this.list.removeFirst();
  }
  clear() {
    this.list.clear();
  }
  getSize() {
    return this.list.size;
  }
  isEmpty() {
    return this.list.size === 0;
  }
  print() {
    this.list.print();
  }
}

// const stack = new Stack();
// stack.print();
// stack.push(1);
// stack.push(22);
// stack.print();
// console.log(stack.peek());
// console.log(stack.pop());
// stack.print();
// console.log(stack.getSize());
// console.log(stack.isEmpty());
// stack.pop();
// console.log(stack.isEmpty());
