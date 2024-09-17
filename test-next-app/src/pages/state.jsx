const { useState } = require("react");

const state = () => {
  const [name, setName] = useState("Billy");

  const handleClick = () => {
    setName(1);
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default state;
