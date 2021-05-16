const TrieNode = require('./TrieNode');

module.exports = class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  insert(word) {
    if (!word) {
      return;
    }

    word = word.toLowerCase();
    let wordLength = word.length;
    let currentNode = this.root;

    for (let level = 0; level < wordLength; level++) {
      // store the value based on array index derived from char code of the character.
      let index = this._getIndex(word[level]);
      if (!currentNode.children[index]) {
        currentNode.children[index] = new TrieNode(word[level]);
      }

      currentNode = currentNode.children[index];
    }

    currentNode.markAsLeaf();
  }

  search(word = '') {
    word = word.toLowerCase();
    let wordLength = word.length;
    let currentNode = this.root;

    for (let level = 0; level < wordLength; level++) {
      let index = this._getIndex(word[level]);
      if (!currentNode.children[index]) {
        return false;
      }
      currentNode = currentNode.children[index];
    }

    return currentNode && currentNode.isWordEnd;
  }

  delete(word) {
    if (!word) {
      return;
    }

    let wordLength = word.length;
    let currentNode = this.root;
    this.deleteNode(currentNode, word, wordLength);
  }

  /**
   * Delete the nodes from leaf to head.
   * @param {TrieNode} currentNode 
   * @param {String} word 
   * @param {Number} wordLength 
   * @param {Number} level 
   * Recurse to the last level to match the last character of the word.
   *  - Clear leaf node flag
   *  - if the node has children DO NOT DELETE the node, else set the node to null
   *  - Delete parent nodes if return value is true(i.e. leaf node is deleted)
   */
  deleteNode(currentNode, word, wordLength, level = 0) {
    if (wordLength === level) {
      if (!currentNode.isWordEnd) {
        return null;
      }

      currentNode.clearLeaf();

      let hasChildren = currentNode.hasChildren();
      if (!hasChildren) {
        currentNode = null;
      }
      return !hasChildren;
    } else {
      let nextNode = currentNode.children[this._getIndex(word[level])];
      let removeNode = this.deleteNode(nextNode, word, wordLength, ++level);
      if (removeNode) {
        currentNode = null;
      }
      return removeNode;
    }
  }

  /**
   * Get array index based on character's code.
   * @param {String} character
   */
  _getIndex(character) {
    return character.charCodeAt(0) - 'a'.charCodeAt(0);
  }
}
