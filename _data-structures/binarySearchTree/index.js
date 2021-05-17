const BinarySearchTree = require('./BinarySearchTree');

let tree = new BinarySearchTree();

tree.insert(15);
tree.insert(12);
tree.insert(20);
tree.insert(3);
tree.insert(6);
tree.insert(50);

console.log(JSON.stringify(tree, null, ' '));

tree.remove(6);
console.log(JSON.stringify(tree, null, ' '));

console.log('------------ in order ------------');
tree.inorder();
console.log('------------ pre order ------------');
tree.preorder();
console.log('------------ post order ------------');
tree.postorder();

tree.remove(15);
console.log(JSON.stringify(tree, null, ' '));
