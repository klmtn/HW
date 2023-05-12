// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---

function SumEven2DimArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 === 0) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}

// TEST:
let arr = [
  [1, 2, 3],
  [4, 5, 6],
];

// console.log(arr[1][0]);

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12
