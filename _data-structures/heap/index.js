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

printTitle('Add value: 70');
heapInstance.insertMaxHeap(70);
//        57                70
//       /  \              /  \
//     38    50          57    50
//    /  \   / \        /  \   / \
//   32  23 40  45     38  23 40  45
//  /                  /
// 70                 32
printJson(heapInstance.heap);


for (let index = heapInstance.heap.length; index > 1; index--) {
  printTitle('Pop from heap: ' + heapInstance.popFromMaxHeap());
  printJson(heapInstance.heap);  
}

// POP: 70
//        57
//       /  \
//     38    50
//    /  \   / \
//   32  23 40  45

// POP: 57
//        50
//       /  \
//     38    45
//    /  \   /
//   32  23 40 

// POP: 50
//        45
//       /  \
//     38    40
//    /  \ 
//   32  23

// POP: 45
//        40
//       /  \
//     38    23
//    / 
//   32

// POP: 40
//        38
//       /  \
//     32    23

// POP: 38
//        32
//          \
//           23
