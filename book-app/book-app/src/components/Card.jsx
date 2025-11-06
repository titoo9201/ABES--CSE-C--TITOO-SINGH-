import React, { useState } from "react";

function Card(props) {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 flex flex-col items-center gap-3">
        <div className="w-full h-40 overflow-hidden rounded-md">
            <img src={props.img} alt="" className="w-full h-full object-cover" />
        </div>
      
      <h3 className="text-lg font-bold text-gray-800">{props.name}</h3>
      <p className="text-blue-500 font-semibold">Price:₹{props.price}</p>
      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={decrement}
          className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
        >
          -
        </button>
        <span className="text-gray-800 font-semibold">{count}</span>
        <button
          onClick={increment}
          className="bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
