/**
 * A heap is a tree-based data structure in which all the nodes of the tree are in a specific order (asc or desc).
 * Accessing binary heap nodes:
 *   - the child nodes of any element at index `i` are placed at indexes `2*i + 1` and `2*i + 2`.
 *   - the parent node of any element at `i` are place at `i/2` and floor the value
 * Types of heap:
 *   1. Min heap(ASC) - the root node's key must be LESS than or equal among the keys present at all of its children
 *   2. Max heap(DESC) - the root node's key must be GREATER than or equal among the keys present at all of its children
 * Applications:
 *   1. Dijkstra's algorithm for finding the shortest path
 *   2. the heap sort algorithm 
 *   3. implementing priority queues
 */
class Heap {
  constructor() {
    this.heap = [null];
  }

  /**
   * Always insert from leaf node and check if parent value based on max or min heap.
   * Time complexity O(log n)
   */
  insertMaxHeap(value) {
    let newIndex = this.heap.length;
    this.heap[newIndex] = value;
    this._fixMaxHeap(newIndex);
  }

  _fixMaxHeap(index) {
    while(index > 1) {
      let parentIndex = this._getParent(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        this._swapElements(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  _swapElements(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  _getParent(index) {
    return Math.floor(index/2);
  }
}

module.exports = Heap;