/*
** Find the minimum and maximum values of an array.
*/

let input = [1, 3, 6, 23, 5, 84, 15];

let min = max = input[0];

for (let i = 0; i < input.length; i++) {
  let el = input[i];
  if (el < min) {
    min = el;
  }
  if (el > max) {
    max = el;
  }
}

console.log(`Min: ${min}`);
console.log(`Max: ${max}`);