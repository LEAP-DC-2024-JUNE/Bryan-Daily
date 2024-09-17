const { useState } = require("react");

const state1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-20">
      <button className="border-2" onClick={handleClick}>
        {count} times clicked
      </button>
    </div>
  );
};

export default state1;
