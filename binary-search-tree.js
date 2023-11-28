// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    const node = new TreeNode(val);
    if (currentNode === null) {
      this.root = node;
      return;
    }

    //do smart shit
    while (true) {
      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return;
        } else {
          currentNode = currentNode.left;
        }
      }

      if (val >= currentNode.val) {
        if (currentNode.right === null) {
          currentNode.right = node;
          return;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(val) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.val === val) {
        return true;
      } else if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }

  inOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right); // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;
    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    let currentNode = this.root;
    let queue = [];
    queue.push(currentNode);
    while (queue.length !== 0) {
      currentNode = queue[0];
      console.log(currentNode.val);
      queue.shift();
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    let currentNode = this.root;
    let stack = [];
    stack.push(currentNode);
    while (stack.length !== 0) {
      currentNode = stack[stack.length - 1];
      console.log(currentNode.val);
      stack.pop();
      if (currentNode.left !== null) stack.push(currentNode.left);
      if (currentNode.right !== null) stack.push(currentNode.right);
    }
  }
}
module.exports = { BinarySearchTree, TreeNode };
