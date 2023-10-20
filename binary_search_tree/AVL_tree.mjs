import { Queue } from "../queue/queue_ll.mjs";

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class ACVTree {
  constructor() {
    this.root = null;
  }

  //      10
  //20          30

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (!node) {
      return new Node(key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
      return node;
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
      return node;
    }
    return node;
  }

  search(key) {
    if (!this.root) {
      return null;
    } else {
      let current = this.root;
      while (current && current.key !== key) {
        if (key < current.key) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return current;
    }
  }

  min() {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  minFromNode(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  max() {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }

  // 1

  //                 5
  //     3                               12
  // 1       4                    8              20
  //                     7                   14      25
  //                                                     37

  deleteNode(node, key) {
    if (!node) {
      return null;
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
      return node;
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
      return node;
    } else {
      // key === node.key => 3 cases

      // case 1 : no child
      if (!node.left && !node.right) {
        return null;
      }
      // case 2 : 1 child
      else if (!node.right) {
        node = node.left;
        return node;
      } else if (!node.left) {
        node = node.right;
        return node;
      }
      // case 3 : 2 children
      else {
        const minNode = this.minFromNode(node.right);
        node.key = minNode.key;
        node.right = this.deleteNode(node.right, minNode.key);
        return node;
      }
    }
  }
}

const tree = new ACVTree();

tree.insert(12);
tree.insert(7);
tree.insert(24);
tree.insert(3);
tree.insert(8);
tree.insert(14);
tree.insert(31);
tree.insert(42);

console.log(tree);
