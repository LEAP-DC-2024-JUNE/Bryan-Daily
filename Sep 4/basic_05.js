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

const makeStrings = (arr) => {
  return arr.map((element) => {
    message = element.age > 50 ? "can go to the Matrix" : "is under age!!";
    return element.name + " " + message;
  });
};

console.log(makeStrings(arr));
