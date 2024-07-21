'use strict';

class AdjacencyListGraph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return undefined;
    }

    while (this.adjacencyList[vertex].length) {
      let edgeToRemove = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, edgeToRemove);
    }
    delete this.adjacencyList[vertex];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;  
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
      return true;
    }
    return false;
  }
}

module.exports = AdjacencyListGraph;