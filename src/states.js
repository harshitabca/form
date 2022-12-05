import React, { useState } from "react";

export default function Example() {
  // Declare a new state variable, which we will call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="state">
      <p>It has been clicked {count} times</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </div>
  );
}
