const array = [
  {
    name: "Bill",
    age: 10,
    siblings: [
      {
        name: "Bolor",
        age: 11
      },
      {
        name: "Boldoo",
        age: 9
      }
    ]
  }
];
console.log(array[0].siblings[1].name);

const array1 = [
  [
    {
      name: "Bill"
    },
    {
      name: "Dul"
    }
  ],
  [
    {
      name: "Alungoo"
    },
    {
      name: "Munkhuush"
    }
  ]
];

console.log(array1[0][1].name);
console.log(array1[1][1].name);