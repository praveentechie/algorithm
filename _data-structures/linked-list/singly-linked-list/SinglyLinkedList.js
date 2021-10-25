'use strict';

class SinglyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.values = null;
    this.size = 0;
  }

  /**
   * Insert new element at the end of the list
   * Time complexity - O(n) [can be coverted to O(1) by having a pointer for tail]
   * @param {any} element element to be inserted
   */
  add(element) {
    let newNode = new SinglyLinkedListNode(element);

    if (!this.values) {
      this.values = newNode;
    } else {
      this._getLastNode().next = newNode;
    }
    this._increaseSize();
  }

  /**
   * Insert new element at the end of the list
   * Time complexity - O(n)
   * @param {any} element element to be inserted
   * @param {number} index index at which the specified element is to be inserted
   */
  addAt(value, index) {
    let newNode = new SinglyLinkedListNode(value);
    let node = this.values;
    let prev;

    for (; index > 0; index--) {
      prev = node;
      node = node.next;
    }

    if (prev) {
      let nextNode = node ? {...node} : null;
      newNode.next = nextNode;
      prev.next = newNode;
    } else {
      newNode.next = this.values;
      this.values = newNode;
    }
    this._increaseSize();
  }

  /**
   * Remove element from a given index
   * Time complexity - O(n)
   * @param {number} index index at which the element is to be removed
   */
  removeFrom(index) {
    let node = this.values;
    let prev;

    for(; index > 0; index--) {
      prev = node;
      node = node.next;
    }

    if (prev) {
      prev.next = node.next;
    } else {
      this.values = this.values.next;
    }

    this._decreaseSize();
  }

  /**
   * Get element from a given index
   * Time complexity - O(n)
   * @param {number} index index at which the element is to be removed
   * @returns {any} value of element at index
   */
  get(index) {
    let node = this.values;
    for(; index > 0; index--) {
      node = node.next;
    }
    return node.value;
  }

  _increaseSize() {
    this.size++;
  }
  
  _decreaseSize() {
    this.size--;
  }

  _getLastNode() {
    let node = this.values;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
}

module.exports = SingleLinkedList;
