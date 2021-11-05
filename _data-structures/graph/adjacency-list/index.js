const AdjacencyListGraph = require('./AdjacencyListGraph');

const adjacencyListGraph = new AdjacencyListGraph();

adjacencyListGraph.addVertex('1');
adjacencyListGraph.addVertex('2');
adjacencyListGraph.addVertex('3');
adjacencyListGraph.addVertex('4');

console.log(adjacencyListGraph);
adjacencyListGraph.addEdge('1', '2');
console.log(adjacencyListGraph);

console.log(adjacencyListGraph.removeEdge('3', '1'));
console.log(adjacencyListGraph.removeEdge('1', '2'))
console.log(adjacencyListGraph);
adjacencyListGraph.addEdge('1', '2');
adjacencyListGraph.addEdge('1', '3');
adjacencyListGraph.addEdge('1', '4');
adjacencyListGraph.addEdge('3', '2');

console.log(adjacencyListGraph);
console.log(adjacencyListGraph.removeVertex('1'));
