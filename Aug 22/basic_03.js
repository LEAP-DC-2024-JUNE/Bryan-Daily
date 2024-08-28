const array = [1, 2, 3];

array.push(4);

console.log(array);

const cart = [{ productName: "Puuz", price: 100 }];
let newItem = { productName: "Macbook", price: 1000 };
cart.push(newItem);
console.log(cart);

array = [1, 2, 3];

let num = array.pop();
array.push(4);

console.log(array);