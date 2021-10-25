/**
 * Algorith that helps to make search faster.
 * O(1) time complexity.
 */

module.exports = class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  /**
   * Time complexity - O(1)
   * @param {*} key 
   * @param {*} value 
   * @returns 
   */
  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  /**
   * Time complexity - O(1)
   * @param {*} key 
   * @returns 
   */
  get(key) {
    let index = this._hash(key);
    let currentIndex = this.dataMap[index];
    if (currentIndex) {
      for (let index = 0; index < currentIndex.length; index++) {
        if (currentIndex[index][0] === key) {
          return currentIndex[index][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let space = 0; space < this.dataMap.length; space++) {
      if (this.dataMap[space]) {
        for (let chain = 0; chain < this.dataMap[space].length; chain++) {
          allKeys.push(this.dataMap[space][chain][0]);
        }
      }
    }
    return allKeys;
  }
}