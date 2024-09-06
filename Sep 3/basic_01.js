let arr = [1, 5, 3, 4, 100];
let sum = 0;

arr.map((num) => {
  sum += num;
});

console.log(`Array: ${arr.toString()}`);
console.log(`Sum: ${sum}`);
