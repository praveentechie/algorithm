/**
 * A Binary Search tree is a binary tree.
 * The nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.
 */

module.exports = class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;//another BinaryTreeNode
    this.left = null;//another BinaryTreeNode
  }
}