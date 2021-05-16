/**
LINK: https://www.hackerearth.com/problem/algorithm/xor-challenge-2420f189/?source=list_view
PROBLEM:
--------
  You are given an Integer C such that the XOR of two integers (A,B) is C. In short A ⊕ B = C (⊕ denotes the bitwise XOR operation)
  Out of all possible pairs of A and B, you have to find such two integers such that their product is maximum. 
  Let's define L(A) = the length of A in its binary representation. Then, L(A) <= L(C) and L(B) <= L(C).

INPUT:
------
  Single Integer representing C (0⩽C⩽105).

OUTPUT:
-------
  Ouptut the maximum product we can achieve under the given conditions.

ANALYSIS:
---------
  Get all possible combinations for the binary value of input.
    Invert the binary value starting from right most value.
    Use the previous list and inverse the next position and so on till the length of the binary input.
    Find max value of the operands product.
*/
function solveProblem(intValue) {
  getAllCombinations(intValue);
}

function getAllCombinations(intValue) {
  let combinations = {};
  let binary = toBinary(intValue);

  let iterations = binary.length - 1;
  for (let i = iterations; i >= 0; i--) {
    getAllCombinationsAtIndex(combinations, intValue, binary, i);
  }

  let product = 0;
  //console.log(JSON.stringify(combinations, '', 2));
  Object.values(combinations).forEach(combination => {
    combination.list.forEach(val => {
      if (val.product > product) {
        product = val.product;
      }
    })
  });
  console.log(product);
  //console.timeEnd('test');
}

function getAllCombinationsAtIndex(combinations, intValue, binary, index) {
  let binary1, binary2;
 
  if (combinations[`${index + 1}`]) {
    combinations[`${index + 1}`].list.map(combination => {
      let {binary1, binary2} = combination;
      binary1 = inverseCharAt(binary1, index);
      binary2 = inverseCharAt(binary2, index);
      pushCombination(intValue, binary1, binary2, combinations, index);
    });
  } else {
    binary1 = binary;
    binary2 = '0'.repeat(binary.length);
    pushCombination(intValue, binary1, binary2, combinations, index);
    binary1 = inverseCharAt(binary1, index);
    binary2 = inverseCharAt(binary2, index);
    pushCombination(intValue, binary1, binary2, combinations, index);
  }
}

function inverseCharAt(input, index) {
  let arrayOfChar = input.split('');
  //console.log('before', arrayOfChar.join(''), index);
  arrayOfChar[index] = arrayOfChar[index] === '0' ? '1' : '0';
  //console.log('afte', arrayOfChar.join(''));
  return arrayOfChar.join('');
}

function pushCombination(intValue, binary1, binary2, combinations, index) {
  let decimal1 = toDecimal(binary1);
  let decimal2 = toDecimal(binary2);
  //console.log(decimal1, decimal2, intValue, typeof decimal1^decimal2, typeof intValue);
  if (Number(decimal1^decimal2) !== intValue) {
    //console.log('NE');
    return;
  }

  let combination = {
    binary1,
    binary2,
    decimal1,
    decimal2,
    product: decimal1 * decimal2
  };
  if (!combinations[index]) {
  combinations[index] = {
      list: []
    }
  };

  combinations[index].list.push(combination);
}

function toBinary(intValue) {
  return (intValue).toString(2);
}

function toDecimal(binaryValue) {
  return parseInt(binaryValue, 2);
}

function readInput() {
  //console.time('test');
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });
  
  let input = 0;
  rl.on('line', function (line) {
    input = Number(line)
  })

  .on('close', () => {
    // Finished processing input, now solve question
    solveProblem(input)
    process.exit()
  })
}

readInput();
