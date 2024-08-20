/*
** Reverse the order of an array.
*/

let input = [1, 2, 3, 4, 5];

let reverse = [];
for (let i = input.length - 1; i >= 0; i--) {
  reverse.push(input[i]);
}

console.log(reverse);