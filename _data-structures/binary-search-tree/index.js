const BinarySearchTree = require('./BinarySearchTree');

let tree = new BinarySearchTree();

console.log('contains 50?', tree.contains(50));

tree.insert(15);
console.log('------------ insert 15 ------------');
tree.insert(12);
console.log('------------ insert 12 ------------');
tree.insert(20);
console.log('------------ insert 20 ------------');
tree.insert(3);
console.log('------------ insert 3 ------------');
tree.insert(6);
console.log('------------ insert 6 ------------');
tree.insert(50);
console.log('------------ insert 50 ------------');
console.log('contains 50?', tree.contains(15));

console.log(JSON.stringify(tree, null, ' '));

tree.remove(6);
console.log('------------ remove 6 ------------');
console.log(JSON.stringify(tree, null, ' '));

console.log('------------ in order ------------');
tree.inorder();
console.log('------------ pre order ------------');
tree.preorder();
console.log('------------ post order ------------');
tree.postorder();

tree.remove(15);
console.log(JSON.stringify(tree, null, ' '));
