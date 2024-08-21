/*
** Find the second largest number.
*/

let input = [100, 1, 1000, 10];
let new_arr = [];

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let max = findMax(input);
for (let i = 0; i < input.length; i++) {
  if (input[i] != max) {
    new_arr.push(input[i]);
  }
}

max = findMax(new_arr);
console.log("The second largest number is:", max);