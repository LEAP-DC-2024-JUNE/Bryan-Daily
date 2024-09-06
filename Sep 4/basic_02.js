let arr = [2, 5, 100];

const stringItUp = (arr) => {
  return arr.map((num) => String(num));
};

console.log(stringItUp(arr));
