let arr = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];

const readyToPutInTheDOM = (arr) => {
  return arr.map((element) => {
    return `<h1>${element.name}</h1><h2>${element.age}</h2>`;
  });
};

console.log(readyToPutInTheDOM(arr));