/**
 * DoublyLinkedListNode
 * @field {any} value value of the current node
 * @field {DoublyLinkedListNode} previous reference to previous node
 * @field {DoublyLinkedListNode} next reference to next node
 */
class DoublyLinkedListNode {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * Add an element to the beginning of the list
   * Time Complexity - O(1)
   * @param {any} element element to be added at the beginning of the list
   */
  unshift(element) {
    let headNode = this.head;
    let newNode = new DoublyLinkedListNode(element);
    if (!headNode) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = headNode;
      this.head = newNode;
      headNode.previous = this.head;
    }
    this.length++;
  }
  /**
   * Add an element to the end of the list
   * Time Complexity - O(1)
   * @param {any} element element to be added at the end of the list
   */
  push(element) {
    let tailNode = this.tail;
    let newNode = new DoublyLinkedListNode(element);
    if (!tailNode) {
      this.head = this.tail = newNode;
    } else {
      newNode.previous = tailNode;
      tailNode.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  /**
   * Remove an element from the beginning of the list.
   * Time complexity - O(1)
   * @returns value removed from the beginning of the list
   */
  shift() {
    let headNode = this.head;
    if (!headNode) {
      return null;
    }
    let nextNode = this.head.next;
    nextNode.previous = null;
    this.head = nextNode;
    this.length--;
    return headNode.value;
  }
  /**
   * Remove an element from the end of the list.
   * Time complexity - O(1)
   * @returns value removed from the end of the list
   */
   pop() {
    let tailNode = this.tail;
    let previousNode = this.tail.previous;
    previousNode.nextNode = null;
    this.tail = previousNode;
    this.length--;
    return tailNode.value;
  }

  get(index) {
    if (index >= this.length) {
      return undefined;
    }

    let node = this.head;
    for (; index > 0; index--) {
      node = node.next;
    }
    return node.value;
  }

  // TODO
  reverse() {
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  printFromFirst() {
    let node = this.head;
    while (node) {
      console.log('f', node.value);
      node = node.next;
    }
  }

  printFromLast() {
    let node = this.tail;
    while (node) {
      console.log('l', node.value);
      node = node.previous;
    }
  }

}

module.exports = DoublyLinkedList;
