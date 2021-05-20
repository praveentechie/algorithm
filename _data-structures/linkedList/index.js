const LinkedList = require('./LinkedList');
const { printJson, printTitle } = require('../../utils/consoleUtils');

let linkedList = new LinkedList();

printTitle('Add values: 4, 6, 8');
linkedList.add(4);
linkedList.add(6);
linkedList.add(8);
printJson(linkedList);

printTitle('Insert 7 value at 0th index');
linkedList.insertAt(7, 0);
printJson(linkedList);

printTitle('Remove value from 1st index');
linkedList.removeFrom(1);
printJson(linkedList);
