module.exports = class TrieNode {
  constructor(char) {
    // value of the node
    this.char = char;
    // true - if node reprents end of word
    this.isWordEnd = false;
    // max of 26 child nodes # no English alphabets
    this.children = [];
    this.count = 0;
  }

  // mark the currentNode as Leaf
  markAsLeaf() {
    this.isWordEnd = true;
  }

  // unset the currentNode as Leaf
  clearLeaf() {
    this.isWordEnd = false;
  }

  hasChildren() {
    return !!this.children.find(child => child !== null);
  }
}