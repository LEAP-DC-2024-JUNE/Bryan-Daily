/*
** Find the sum of the positive even integers.
*/

let input = [2, -3, 5, 6, -8, 10];

let sum = 0;
for (let i = 0; i < input.length; i++) {
  let el = input[i];
  if (el > 0 && el % 2 == 0) {
    sum += el;
  }
}

console.log(sum);