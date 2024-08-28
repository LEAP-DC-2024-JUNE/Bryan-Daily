function Demo3() {
  function onClick() {
    return alert("Hello.");
  }
  return <button onClick={onClick}>Button</button>
}

export default Demo3;