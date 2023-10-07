export class Stack {
  constructor(size) {
    this.array = new Array(size);
    this.top = -1;
    this.Max = size;
  }

  push(value) {
    if (this.top >= this.Max - 1) {
      throw new Error("stack overflow");
    }
    this.top++;
    this.array[this.top] = value;
  }

  peek() {
    if (this.top < 0) {
      return null;
    } else {
      return this.array[this.top];
    }
  }

  pop() {
    if (this.top < 0) {
      return null;
    } else {
      const value = this.array[this.top];
      this.top--;
      return value;
    }
  }

  getSize() {
    return this.top + 1;
  }

  isEmpty() {
    return this.top < 0;
  }

  clear() {
    this.top = -1;
  }
  print() {
    process.stdout.write("[");
    for (let i = this.top; i >= 0; i--) {
      process.stdout.write(`${this.array[i]} ${i > 0 ? "," : ""}`);
    }
    process.stdout.write("]\n");
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
