/** 
PROBLEM:
--------
  There are N houses for sale. The i-th house costs Ai dollars to buy. You have a budget of B dollars to spend.
  What is the maximum number of houses you can buy?

INPUT:
------
  The first line of the input gives the number of test cases, T. T test cases follow.
  Each test case begins with a single line containing the two integers N and B.
  The second line contains N integers.
  The i-th integer is Ai, the cost of the i-th house.

OUTPUT:
-------
  For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the maximum number of houses you can buy.

ANALYSIS:
---------
  We want to buy more house with given amount.
  Sort the house by amount in ascending order and buy house until you run out of money.

*/

function solveProblem(problem) {
  for (let index = 1; index <= problem.T; ++index) {
    let { total, amount, propertyList } = problem.testCases[index - 1];
    propertyList = propertyList.sort((a, b) => a - b);

    let propertiesBought = 0;
    for (let propertyIndex = 0; propertyIndex < propertyList.length; ++propertyIndex) {
      amount = amount - propertyList[propertyIndex];
      if (amount >= 0) {
        propertiesBought++;
      } else {
        break;
      }
    }

    console.log(`Case #${index}: ${propertiesBought}`);
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
            total: aNum,
            amount: bNum
        });
    } else {
        // read properties
        input.propertyList = line.split(' ');
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
