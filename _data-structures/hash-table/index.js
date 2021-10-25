const HashTable = require('./HashTable');

let hashTable = new HashTable();
console.log(hashTable);
hashTable.set('bolts', 1000);
console.log('Inserting `washers`:', hashTable.set('washers', 300).dataMap[4]);
console.log('Inserting `lumber`:', hashTable.set('lumber', 40).dataMap[6]);

console.log('bolts', hashTable.get('bolts'));
console.log('washers', hashTable.get('washers'));
console.log('lumber', hashTable.get('lumber'));
console.log('all keys', hashTable.keys());
