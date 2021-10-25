/**
 * A Binary Search tree is a binary tree.
 * The nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.
 */

 class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;//another BinaryTreeNode
    this.left = null;//another BinaryTreeNode
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Insert a value into the BST
   * @param {any} value value to be inserted into the tree
   * @returns 
   */
  insert(value) {
    let newNode = new BinaryTreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (node.value > newNode.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  remove(value) {
    this._removeNode(this.root, value);
  }

  contains(value) {
    if (!this.root) {
      return false;
    }

    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // traversal
  /**
   * In-order(LNR):
   * Inorder traversal gives nodes in non-decreasing order
   * 1. Traverse the left subtree i.e perform inorder on left subtree
   * 2. Visit the root
   * 3. Traverse the right subtree i.e perform inorder on right subtree
   */
  inorder(node) {
    this._inorder(node || this.root);
  }

  _inorder(node) {
    if (node) {
      this._inorder(node.left);
      console.log(node.value);
      this._inorder(node.right);
    }
  }

  /**
   * Pre-order(NLR):
   * 1. Visit the root
   * 2. Traverse the left subtree i.e perform preorder on left subtree
   * 3. Traverse the right subtree i.e perform preorder on right subtree
   */
  preorder(node) {
    this._preorder(node || this.root);
  }

  _preorder(node) {
    if (node) {
      console.log(node.value);
      this._preorder(node.left);
      this._preorder(node.right);
    }
  }

  /**
   * Post-order(LRN):
   * 1. Traverse the left subtree i.e perform postorder on left subtree
   * 2. Traverse the right subtree i.e perform postorder on right subtree
   * 3. Visit the root
   */
   postorder(node) {
     this._postorder(node || this.root);
   }

   _postorder(node) {
    if (node) {
      this._postorder(node.left);
      this._postorder(node.right);
      console.log(node.value);
    }
  }

  _removeNode(node, value) {
    if (!node) {
      return null;
    } else if (value < node.value) {
      // if value is less than node value, remove child from left
      node.left = this._removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      // if value is greater than node value, remove child from right
      node.right = this._removeNode(node.right, value);
      return node;
    } else {
      // if values are same remove the current node.
      if (!node.left && !node.right) {
        // if node has no children remove the node.
        node = null;
        return node;
      } else if (!node.left) {
        // if node has only right child, remove node and move right node to the deleted node position
        node = node.right;
        return node;
      } else if (!node.right) {
        // if node has only left child, remove node and move left node to the deleted node position
        node = node.left;
        return node;
      } else {
        // if both the children are present.
        // find min node from right tree and replace with the current node.
        // rewrite right tree of current node by deleting the min node found from right tree.
        let aux = this._findMinNode(node.right);
        node.value = aux.value;

        node.right = this._removeNode(node.right, aux.value);
        return node;
      }
    }
  }

  /**
   * if left node is empty then it has to be the min value node.
   * else recurse until we find one.
   */
  _findMinNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this._findMinNode(node.left);
    }
  }
}