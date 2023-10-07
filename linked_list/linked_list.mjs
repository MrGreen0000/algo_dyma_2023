export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  addFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  addLast(value) {
    let current = this.head;
    if (!current) {
      this.head = new Node(value);
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.siez++;
  }

  add(position, value) {
    if (position < 0 || position > this.size) {
      throw new Error("Index en dehors des limite");
    } else if (position === 0) {
      this.head = new Node(value, this.head);
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      current.next = new Node(value, current.next);
    }
    this.size++;
  }

  removeFirst() {
    let current = this.head;
    if (!current) {
      return null;
    } else {
      this.head = current.next;
      this.size--;
      return current.value;
    }
  }

  removeLast() {
    let current = this.head;
    if (!current) {
      return null;
    } else if (!current.next) {
      this.head = null;
      this.size--;
      return current.value;
    } else {
      while (current.next.next) {
        current = current.next;
      }
      const lastNode = current.next;
      current.next = null;
      return lastNode.value;
    }
  }

  remove(position) {
    if (position < 0 || position > this.size - 1) {
      throw new Error("index en dehors des limites");
    } else if (position === 0) {
      return this.removeFirst();
    } else {
      let current = this.head;
      while (position - 1) {
        current = current.next;
        position--;
      }
      const nodeValue = current.next.value;
      current.next = current.next.next;
      this.size--;
      return nodeValue;
    }
  }

  contains(valeur) {
    let current = this.head;
    while (current) {
      if (Object.is(valeur, current.value)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  get(position) {
    if (position < 0 || position > this.size - 1) {
      return null;
    } else {
      let current = this.head;
      while (position) {
        current = current.next;
        position--;
      }
      return current.value;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      process.stdout.write(`${current.value} ->`);
      current = current.next;
    }
    console.log(null);
  }
}

// const linkedList = new LinkedList();
// linkedList.addFirst("a");
// linkedList.print();
// linkedList.addLast("b");
// linkedList.print();
// linkedList.add(1, "c");
// linkedList.print();
// console.log(linkedList.removeFirst());
// linkedList.print();
// console.log(linkedList.removeLast());
// linkedList.print();
// console.log(linkedList.remove(0));
// linkedList.print();
// linkedList.addFirst("a");
// linkedList.print();
// linkedList.addLast("b");
// linkedList.print();
// linkedList.add(1, "c");
// linkedList.print();
// linkedList.print();
// linkedList.addFirst("d");
// linkedList.print();
// console.log(linkedList.contains("d"));
// console.log(linkedList.get(2));
// linkedList.print();
