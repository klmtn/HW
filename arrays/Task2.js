// TASK: Given the array: numbersArr bellow, write the code (using a for loop) which will create two new arrays:
// evenNums - which elements will be the positive even numbers from numbersArr.
// oddNums - which elements will be the negative odd numbers from numbersArr.

// Note that the Zero is neither positive nor negative number!

// HINT: you can push a value in a array by using array.push(value) method.

// >>>>> your code goes bellow:

const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];

for (var i = 0; i < numbersArr.length; i++) {
  if (numbersArr[i] % 2 === 0 && numbersArr[i] > 0) {
    evenNums.push(numbersArr[i]);
    i++;
  }
  if (numbersArr[i] % 2 != 0 && numbersArr[i] < 0) {
    oddNums.push(numbersArr[i]);
    i++;
  }
}

console.log(evenNums);
console.log(oddNums);
