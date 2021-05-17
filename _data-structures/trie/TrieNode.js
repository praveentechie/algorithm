/**
 * Tries are an ordered tree-like data structure efficient in handling programming problems related to "strings".
 * - A trie is always a set of linked nodes with an empty root node.
 * - Each node represents a unique alphabet.
 * - Each node can point to null or other children nodes.
 * - Tries to provide the same path for words that share a common prefix.
 * 
 * Pros:
 *  - Trie’s retrieval/insertion time in the worst case is better than hashTable and binary search trees.
 *  - It is easy to print all words in alphabetical order
 * Cons:
 *  - They require a lot of memory storage for strings.
 *  - More complex than other data structures
 */

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