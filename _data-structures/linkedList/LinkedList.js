const ListNode = require('./ListNode');

class LinkedList {
  constructor() {
    this.list = null;
    this.size = 0;
  }

  add(value) {
    let newNode = new ListNode(value);

    if (!this.list) {
      this.list = newNode;
    } else {
      this._getLastNode().next = newNode;
    }
    this._increaseSize();
  }

  insertAt(value, index) {
    let newNode = new ListNode(value);
    let node = this.list;
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
      newNode.next = this.list;
      this.list = newNode;
    }
    this._increaseSize();
  }

  removeFrom(index) {
    let node = this.list;
    let prev;

    for(; index > 0; index--) {
      prev = node;
      node = node.next;
    }

    if (prev) {
      prev.next = node.next;
    } else {
      this.list = this.list.next;
    }

    this._decreaseSize();
  }

  _increaseSize() {
    this.size++;
  }
  
  _decreaseSize() {
    this.size--;
  }

  _getLastNode() {
    let node = this.list;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
}

module.exports = LinkedList;