import { Queue } from "../queue/queue_ll.mjs";

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

export default class AVLTree {
  constructor() {
    this.root = null;
  }

  getNodeHeight(n) {
    if (n) {
      return n.height;
    } else {
      return 0;
    }
  }

  setNodeHeight(n) {
    return (
      Math.max(this.getNodeHeight(n.left), this.getNodeHeight(n.right)) + 1
    );
  }

  getBalanceFactor(n) {
    return this.getNodeHeight(n.left) - this.getNodeHeight(n.right);
  }

  // Avant la rotation gauche                 Après la rotation gauche
  //  x                                       y
  //      y                               x       z
  //  #          Z                            #

  // Rotation gauche
  // T1, T2, T3 sont les sous-arbres
  //         x                               y
  //        / \      Rotation gauche (y)    /  \
  //       T1  y    - - - - - - - - ->     x    T3
  //          / \   <- - - - - - - - -    /  \
  //        T2  T3   Rotation droite (x) T1   T2

  leftRotation(x) {
    const y = x.right;
    x.right = y.left;
    y.left = x;
    x.height = this.setNodeHeight(x);
    y.height = this.setNodeHeight(y);
    return y;
  }

  // Avant la rotation droite                 Après la rotation droite
  //        x                                   y
  //    y                                   z       x
  //Z       #                                   #

  // Rotation droite
  // T1, T2, T3 sont les sous-arbres
  //         y                               x
  //        / \     Rotation droite (x)     /  \
  //       x   T3   - - - - - - - - ->     T1   y
  //      / \       <- - - - - - - - -         / \
  //     T1  T2     Rotation gauche (y)       T2  T3
  rightRotation(x) {
    const y = x.left;
    x.left = y.right;
    y.right = x;
    x.height = this.setNodeHeight(x);
    y.height = this.setNodeHeight(y);
    return y;
  }

  //      10
  //20          30

  balanceNode(node, balanceFactor) {
    if (balanceFactor > 1) {
      // Gauche gauche ou gauche droite
      if (this.getBalanceFactor(node.left) >= 0) {
        // gauche gauche
        return this.rightRotation(node);
      } else {
        // gauche droite
        node.left = this.leftRotation(node.left);
        return this.rightRotation(node);
      }
    } else if (balanceFactor < -1) {
      // Droite droite ou droite gauche
      if (this.getBalanceFactor(node.right) <= 0) {
        // droite droite
        return this.leftRotation(node);
      } else {
        // droite gauche
        node.right = this.rightRotation(node.right);
        return this.leftRotation(node);
      }
    }
  }

  insert(key) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node, key) {
    if (!node) {
      return new Node(key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else {
      return node;
    }

    node.height = this.setNodeHeight(node);
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1 || balanceFactor < -1) {
      return this.balanceNode(node, balanceFactor);
    } else {
      return node;
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
    s;
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
    } else if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else {
      // key === node.key => 3 cases

      // case 1 : no child
      if (!node.left && !node.right) {
        return null;
      }
      // case 2 : 1 child
      else if (!node.right) {
        node = node.left;
      } else if (!node.left) {
        node = node.right;
      }
      // case 3 : 2 children
      else {
        const minNode = this.minFromNode(node.right);
        node.key = minNode.key;
        node.right = this.deleteNode(node.right, minNode.key);
      }
    }
    node.height = this.setNodeHeight(node);
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > 1 || balanceFactor < -1) {
      return this.balanceNode(node, balanceFactor);
    } else {
      return node;
    }
  }

  print() {
    console.log(JSON.stringify(this.root, null, 2));
  }
}

const tree = new AVLTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);

tree.print();

// 1
//     2
//         3
//             4
//                 5

//     2
// 1       4
//     3       5
