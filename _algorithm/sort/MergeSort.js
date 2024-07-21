'use strict';

/**
 * Merge sort is a classic divide-and-conquer sorting algorithm
 * that divides the input array into two halves, recursively sorts each half,
 * and then merges the sorted halves to produce a sorted array.
 * It is known for its stable O(n log n) time complexity.
 * It is widely used for sorting large datasets efficiently.
 * 
Algorithm:
--------------
Divide:
- Divide the unsorted array into two halves recursively until each sub-array contains only one element.

Conquer (Recursive Sorting):
- Recursively sort each sub-array.
- This step continues until all sub-arrays have been sorted into single-element arrays.

Combine (Merge):
- Merge the sorted sub-arrays (left and right halves) to produce the final sorted array.
- This involves comparing elements from both halves and placing them in the correct order into a temporary array.
 */
module.exports = class MergeSort {
  constructor(list) {
    this.list = list;
  }

  sort() {
    return this._sort(this.list);
  }

  _sort(array) {
    if (array.length === 1) {
      return array;
    }

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return this.merge(this._sort(left), this._sort(right));
  }

  merge(left, right) {
    let combined = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        combined.push(left[leftIndex]);
        leftIndex++;
      } else {
        combined.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      combined.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      combined.push(right[rightIndex]);
      rightIndex++;
    }
    return combined;
  }
}
