// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).

// YOUR CODE HERE
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function sumArrays(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum[i] = arr1[i] + arr2[i];
  }

  return sum;
}

// let sum = sumArrays(arr1) + sumArrays(arr2);
// console.log(sum);

// let sum = sumArray([1, 2, 3]);
// console.log(sum);

// TEST:
console.log(sumArrays(arr1, arr2));
// OUTPUT:
// [ 5, 7, 9 ]
