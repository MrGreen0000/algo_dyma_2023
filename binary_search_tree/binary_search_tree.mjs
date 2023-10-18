class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let current = this.root;
      while (true) {
        if (current.key > key) {
          if (!current.left) {
            current.left = new Node(key);
            return;
          } else {
            current = current.left;
          }
        } else if (current.key < key) {
          if (!current.right) {
            current.right = new Node(key);
            return;
          } else {
            current = current.right;
          }
        } else {
          return;
        }
      }
    }
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

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(3);
tree.insert(12);
tree.insert(1);
tree.insert(4);
tree.insert(8);
tree.insert(20);
tree.insert(7);
tree.insert(14);
tree.insert(25);
tree.insert(37);

tree.delete(12);

console.log(tree.search(5));
console.log(tree.search(14));
