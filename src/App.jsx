import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
  <div>
    <input
    type="text"
    onChange={(e) => setText (e.target.value)}
    />
    <h2>{text}</h2>
    <p>Characters: {text.length}</p>
  </div>
  );
}

export default App