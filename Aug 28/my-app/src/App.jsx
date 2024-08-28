// function App() {
//   function printName(name) {
//     return <div>{name}</div>;
//   }
//   return <div>Hello {printName("Khaliukaa")}</div>;
// }

// function App() {
//   const name = "Bryan";
//   if (name === "Bryan") {
//     return <div>Hello {name}</div>;
//   } else {
//     return <div>User not found.</div>
//   }
// }

function App() {
  function onClick() {
    return alert("Hello.");
  }
  return <div onClick={onClick}>Button</div>
}

export default App;
