function solveProblem(problem) {
  problem.testCases.forEach((test, index) => {
    getResult(index + 1, test);
  })
}

function getResult(index, N) {
  var result = 0;
  N = N*2;

  for (var i = 1; i * i < N; i++) {
    if (N % i == 0 && ((i + N / i) & 1) == 1) {
        result++;
    }
  }
  console.log(`Case #${index}: ${result}`);
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
