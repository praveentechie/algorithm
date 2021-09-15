/**
 * 
 * 
 */

// N - length of string S
// K - alphabet count
function solveProblem(input) {
  console.log(JSON.stringify(input));
  input.testCases.forEach(element => {
    findResult(element);
  });
}

function findResult(element) {
  var K = element.K, N = element.N, word = element.value;
  var permutations = [];


}

function getPermutations() {
  
}

function getOffset(char) {
  return char.charCodeAt() - 'a'.charCodeAt();
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
  }
  let lineNumber = 1;
  let input;

  rl.on('line', function (line) {
    // TODO: Process input
    if (problem.T === 0) {
      // Get number of test cases from first line
      problem.T = Number(line)
    } else if (lineNumber % 2 === 0) {
        // read total and amount
        // TODO change how input data is processed
        const [a, b] = line.split(' ')
        const aNum = Number(a)
        const bNum = Number(b)
        input = Object.assign({}, {
            N: aNum,
            K: bNum
        });
    } else {
        // read properties
        input.value = line;
        problem.testCases.push(input);
    }
    lineNumber++;
  })

  .on('close', () => {
    // Finished processing input, now solve question
    solveProblem(problem)
    process.exit()
  })
}

readInput();
