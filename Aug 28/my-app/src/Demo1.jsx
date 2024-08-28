function Demo1() {
  function printName(name) {
    return <div>{name}</div>;
  }
  return <div>Hello {printName("Khaliukaa")}</div>;
}

export default Demo1;