'use strict';

module.exports = class SelectionSort {
  constructor(list) {
    this.list = list;
  }

  sort() {
    let min;
    for (let i = 0; i < this.list.length - 1; i++) {
      min = i;
      for (let j = i+1; j < this.list.length; j++) {
        if (this.list[j] < this.list[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let temp = this.list[min];
        this.list[min] = this.list[i];
        this.list[i] = temp;  
      }
    }
    return this.list;
  }
}
