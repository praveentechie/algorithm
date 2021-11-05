const BubbleSort = require('./BubbleSort');
const SelectionSort = require('./SelectionSort');
const MergeSort = require('./MergeSort');

const arrayValue = [4, 2, 6, 5, 1 ,3, 7];

console.log(`Sorting array ${arrayValue} using bubble sort`);
const bubbleSort = new BubbleSort([...arrayValue]);
console.log('Result:', bubbleSort.sort());

console.log(`Sorting array ${arrayValue} using selection sort`);
const selectionSort = new SelectionSort([...arrayValue]);
console.log('Result:', selectionSort.sort());

console.log(`Sorting array ${arrayValue} using merge sort`);
const mergeSort = new MergeSort([...arrayValue]);
console.log('Result:', mergeSort.sort());
