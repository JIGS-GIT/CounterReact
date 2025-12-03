import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [Add, setAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>First Way Counter</h2>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h2>Second Way Counter</h2>
      <h2>{Add}</h2>
      <button onClick={()=>setAdd(Add+1)}>Add</button>
      <button onClick={()=>setAdd(Add-1)}>minus</button>
    </div>
  );
}

export default Counter;
