function solveProblem(problem) {
  for (let index = 1; index <= problem.T; index++) {
    console.log(`Case #${index}: ${findMinClick(problem.testCases[index - 1])}`);
  }
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

  rl.on('line', function (line) {
    if (problem.T === 0) {
      // Get number of test cases from first line
      problem.T = Number(line)
    } else {
      problem.testCases.push(Number(line));
    }
  })

  .on('close', () => {
    // Finished processing input, now solve question
    solveProblem(problem)
    process.exit()
  })
}

readInput();
