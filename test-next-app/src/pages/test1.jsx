const Test1 = () => {
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
      return (
      <>
        <h1 className="text-center text-xl font-bold">{element.name}</h1>
        <h2 className="text-center">{element.age}</h2>
      </>);
    });
  };

  return (
    <div>
      {readyToPutInTheDOM(arr)}
    </div>
  );
}

export default Test1;