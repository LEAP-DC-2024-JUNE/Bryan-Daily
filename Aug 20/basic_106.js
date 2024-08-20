/*
** Find the sum of numbers from 1 to n.
*/

let input = 5;

const sum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(input));