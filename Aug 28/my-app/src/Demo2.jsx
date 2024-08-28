function Demo2() {
  const name = "Bryan";
  if (name === "Bryan") {
    return <div>Hello <a href="/about">{name}</a></div>;
  } else {
    return <div>User not found.</div>
  }
}

export default Demo2;