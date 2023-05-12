// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

function findMaxEven(numbers) {
  let evenNumbers = [];
  let maxNumber = [0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers[i] = numbers[i];
    }
    for (let j = 0; j < evenNumbers.length; j++) {
      if (maxNumber < evenNumbers[j]) {
        maxNumber = evenNumbers[j];
      }
    }
  }
  return maxNumber;
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);

console.log(`The max even number of ${numbers} is ${max}`);

// console.log(findMaxEven(numbers));
