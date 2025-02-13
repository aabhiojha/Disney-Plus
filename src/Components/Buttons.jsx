import React from "react";
import { useState } from "react";

// increase / decrease the count

function Buttons() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <div className="border-4 w-max rounded-4xl p-4">
        <button
          className="p-4 m-4 cursor-pointer bg-amber-600 border-0 rounded-xl"
          onClick={increment}
        >
          Increase
        </button>
        <button
          className="p-4 m-4 cursor-pointer bg-fuchsia-800 border-0 rounded-xl"
          onClick={decrement}
        >
          Decrease
        </button>
        <h1>Count: </h1>
        <h1 className="text-6xl">{count}</h1>
      </div>
    </>
  );
}

export default Buttons;
