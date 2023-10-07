export class Queue {
  constructor(size) {
    this.MAX = size;
    this.head = 0;
    this.tail = 0;
    this.array = new Array(this.MAX).fill(null);
  }

  enqueue(value) {
    if (this.getSize() === this.MAX) {
      throw new Error("Queue overflow");
    }

    this.array[this.tail] = value;
    this.tail++;
    if (this.tail === this.MAX) {
      this.tail = 0;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.array[this.head];
    this.array[this.head] = null;
    this.head++;
    if (this.head === this.MAX) {
      this.head = 0;
    }
    return value;
  }
  peek() {
    return this.array[this.head];
  }
  isEmpty() {
    return this.array[this.head] === null;
  }
  getSize() {
    if (this.isEmpty()) {
      return 0;
    } else if (this.head < this.tail) {
      return this.tail - this.head;
    } else {
      return this.MAX - this.tail + this.head;
    }
  }
  clear() {
    this.head = 0;
    this.tail = 0;
    this.array = new Array(this.MAX).fill(null);
  }
}

const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue.getSize());
// console.log(queue.isEmpty());
// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
