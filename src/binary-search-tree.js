const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addNode(this.head, data);

    function addNode(node, data) {
      if (node === null) return new Node(data);
      if (node.data === data) return node;

      if (data < node.data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, node = this.head) {
    if (node === null) return null;
    if (node.data === data) {
      return node;
    } else if (node.data > data) {
      return this.find(data, node.left);
    } else {
      return this.find(data, node.right);
    }
  }

  remove(data, node = this.head) {
    if (node === null) return node;
    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      node.data = this.min(node.right);
      node.right = this.remove(node.data, node.right);
    }
    return node;
  }

  min(node = this.head) {
    if (node === null) return null;
    if (node.left === null) {
      return node.data;
    } else {
      return this.min(node.left);
    }
  }

  max(node = this.head) {
    if (node === null) return null;
    if (node.right === null) {
      return node.data;
    } else {
      return this.max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};