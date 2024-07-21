'use strict';
/**
 * Bubble sort works by repeatedly stepping through the list of elements to be sorted,
 * comparing adjacent items, and swapping them if they are in the wrong order.
 * 
Algorithm:
----------
Initialization:
- Start with an unsorted list/array of elements.

Pass through the list:
- Iterate through the list repeatedly.

Compare adjacent elements:
- Compare each pair of adjacent elements in the list.

Swap if necessary:
- If the elements are out of order (i.e., the first element is greater than the second), swap them.

Repeat until sorted:
- Continue making passes through the list until no swaps are needed during a pass.

Termination:
- The algorithm terminates when no more swaps are needed, indicating that the list is sorted
*/
module.exports = class BubbleSort {
  constructor(list) {
    this.list = list;
  }

  sort() {
    for (let index = this.list.length - 1; index > 0; index--) {
      for (let j = 0; j < index; j++) {
        if (this.list[j] > this.list[j + 1]) {
          let temp = this.list[j];
          this.list[j] = this.list[j + 1];
          this.list[j + 1] = temp;
        }
      }
    }
    return this.list;
  }
}