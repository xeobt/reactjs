import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button style={{width: "50%", height: "70vh"}} onClick={() => setCount(count + 1)}>+</button>

      <button style={{width: "50%", height: "70vh"}}  onClick={() => setCount(count - 1)}>-</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;