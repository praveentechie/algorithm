/**
PROBLEM:
--------
  Pip has N strings. Each string consists only of letters from A to Z. Pip would like to bundle their strings into groups of size K. Each string must belong to exactly one group.
  The score of a group is equal to the length of the longest prefix shared by all the strings in that group. For example:
  The group {RAINBOW, RANK, RANDOM, RANK} has a score of 2 (the longest prefix is 'RA').
  The group {FIRE, FIREBALL, FIREFIGHTER} has a score of 4 (the longest prefix is 'FIRE').
  The group {ALLOCATION, PLATE, WORKOUT, BUNDLING} has a score of 0 (the longest prefix is '').
  Please help Pip bundle their strings into groups of size K, such that the sum of scores of the groups is maximized.

INPUT:
------
  The first line of the input gives the number of test cases, T.
  T test cases follow. Each test case begins with a line containing the two integers N and K.
  Then, N lines follow, each containing one of Pip's strings.

OUTPUT:
-------
  For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the maximum sum of scores possible.

SOLUTION:
---------
  TODO: solution passes primary tests but others are failing.
  Create trie with the given string and set the count only for leaf node.
  Traverse to leaf node and calculate value of current node by summing count of children nodes on way up.
  If count is >= K add the length to global ans value and reduce the count by K.  
 */

class TrieNode {
  constructor(char) {
    this.char = char;
    this.count = 0;
    this.children = [];
  }
}

let ans = 0;
function solveProblem(problem) {
  problem.testCases.map((test, index) => {
    console.log(JSON.stringify(test));
    findMaxScore(test.N, test.K, test.group);
    console.log(`Case #${index + 1}: ${ans}`);
  });
}

function findMaxScore(N, K, group) {
  let treeNode = new TrieNode();
  ans = 0;
  for (let index = 0; index < N; index++) {
    insert(treeNode, group[index]);
  }

  console.log(JSON.stringify(treeNode));
  dfs(K, treeNode, 0);
}

function dfs(K, currentNode, level) {
  for (let index = 0; index < currentNode.children.length; index++) {
    if (currentNode.children[index]) {
      dfs(K, currentNode.children[index], level + 1);
      currentNode.count += currentNode.children[index].count;
    }
  }

  while (currentNode.count >= K) {
    currentNode.count = 0;
    ans += level;
  }
}

function insert(treeNode, value) {
  let currentNode = treeNode;
  for (let level = 0; level < value.length; level++) {
    let character = value[level];
    if (!currentNode.children[getIndex(character)]) {
      currentNode.children[getIndex(character)] = new TrieNode(character);
    }
    currentNode = currentNode.children[getIndex(character)];
  }
  ++currentNode.count;
  console.log(currentNode);
}

function getIndex(character) {
  return character.charCodeAt(0) - 'A'.charCodeAt(0);
}

function readInput() {
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  let problem = {
    T: 0,
    testCases: []
  };
  let TEST_TEMPLATE = {
    N: 0,
    K: 0,
    group: [],
    current: 0
  };

  let test = Object.assign({}, TEST_TEMPLATE);

  rl.on('line', function (line) {
    // Process input
    if (problem.T === 0) {
      // Get number of test cases from first line
      problem.T = Number(line);
    } else if (test.N === 0) {
      const [N, K] = line.split(' ');
      test.N = Number(N);
      test.K = Number(K);
    } else if (test.N >= test.current) {
      test.group.push(line);
      ++test.current;
      if (test.N === test.current) {
        problem.testCases.push(test);
        test = Object.assign({}, {...TEST_TEMPLATE, group: []});
      }
    }
  })

  .on('close', () => {
    // Finished processing input, now solve question
    solveProblem(problem);
    process.exit()
  })
}

readInput();
