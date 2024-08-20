/*
** Find the average of numbers in an array.
*/

let input = [10, 20, 30, 40, 50];

let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += input[i];
}
let avg = sum / input.length;

console.log("The average is " + String(avg) + ".");