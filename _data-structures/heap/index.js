const { printJson, printTitle } = require('../../utils/consoleUtils');
const Heap = require('./Heap');

let heapInstance = new Heap();

//      57
//     /  \
//   38    45
//  /  \   / \
// 32  23 40

printTitle('Add values');
heapInstance.insertMaxHeap(57);
heapInstance.insertMaxHeap(38);
heapInstance.insertMaxHeap(45);
heapInstance.insertMaxHeap(32);
heapInstance.insertMaxHeap(23);
heapInstance.insertMaxHeap(40);
printJson(heapInstance.heap);
printTitle('Add value: 50');
heapInstance.insertMaxHeap(50);

//      57
//     /  \
//   38    50
//  /  \   / \
// 32  23 40  45
printJson(heapInstance.heap);

heapInstance.insertMaxHeap(70);
//        57                70
//       /  \              /  \
//     38    50          57    50
//    /  \   / \        /  \   / \
//   32  23 40  45     38  23 40  45
//  /                  /
// 70                 32
printJson(heapInstance.heap);
