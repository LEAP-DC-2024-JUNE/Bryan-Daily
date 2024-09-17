const { useState } = require("react");

const count = () => {
  const [number, setNumber] = useState(1);
  const [isOn, setIsOn] = useState(false);

  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    setNumber(number - 1);
  };
  const toggleOn = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="p-5 flex flex-col gap-10">
      <div className="border-2 p-10">
        <p>Count: {number}</p>
        <button className="px-2 bg-gray-300 border-2" onClick={increment}>
          +
        </button>
        <button className="px-2 bg-gray-300 border-2" onClick={decrement}>
          -
        </button>
      </div>
      <div className="border-2 p-10">
        <button
          className={`${
            isOn ? "bg-green-600" : "bg-red-600"
          } px-2 py-1 border-2`}
          onClick={toggleOn}
        >
          {isOn ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
};

export default count;
