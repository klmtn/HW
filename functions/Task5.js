let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];

// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
let num = 0;
function getHighestScoreIndex() {
  for (let i = 0; i <= scores.length; i++) {
    if (scores[i] > num) {
      num = i;
    }
  }
  return num;
}

// console.log(getHighestScoreIndex(scores));

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

// ---> YOUR CODE HERE <---

console.log(
  `${students[getHighestScoreIndex(scores)]} has the higest score: ${
    scores[getHighestScoreIndex(scores)]
  }`
);

// expected output
// Maria has the higest score: 6
