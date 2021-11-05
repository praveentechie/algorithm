'use strict';

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