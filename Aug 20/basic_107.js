/*
** For a given number, find the lowest exponent that would make it greater than 1000.
** The given number has to be between 1 and 1000, otherwise display an error message.
*/

let input = 1.01;

if (1 < input <= 1000) {
  let counter = 1;
  while (true) {
    if (input ** counter > 1000) {
      console.log(`${input} to the ${counter} power is greater that 1000.`);
      break;
    }
    counter++;
  }
} else {
  console.log("The input value is invalid.")
}