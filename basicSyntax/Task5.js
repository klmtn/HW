// Да се напише програма, която изписва в конзолата сумата на четните числа, които се делят на 3, в интервала [1 - 20] включително.

// очакван отговор: sum = 36

let sum = 0;
for (i = 0; i <= 20; i++) {
  //console.log(i)
  while (i % 2 === 0 && i % 3 === 0) {
    sum = sum + i;
    i++;
  }
}
console.log(sum);