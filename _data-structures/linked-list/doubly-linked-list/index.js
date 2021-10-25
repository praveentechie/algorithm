const DoublyLinkedList = require('./DoublyLinkedList');
const { printTitle } = require('../../../utils/consoleUtils');

printTitle('Doubly linked list');
let doublyLinkedList = new DoublyLinkedList();
printTitle('Add values: 3, 2, 1, 4, 5, 6');
doublyLinkedList.unshift(3);
doublyLinkedList.unshift(2);
doublyLinkedList.unshift(1);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
console.log('value at index 0:', doublyLinkedList.get(0));
console.log('value at index 2:', doublyLinkedList.get(2));
console.log('value at index greater than length (7):', doublyLinkedList.get(7));
printTitle('Print from first');
doublyLinkedList.printFromFirst();
printTitle('Print from last');
doublyLinkedList.printFromLast();
printTitle('Remove element from first');
console.log('Element:', doublyLinkedList.shift(), 'size:', doublyLinkedList.size());
printTitle('Remove element from last');
console.log('Element:', doublyLinkedList.pop(), 'size:', doublyLinkedList.size());

