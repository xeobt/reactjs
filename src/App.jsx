import { useState } from "react";

function App() {
  function handleSubmit(){
    event.preventDefault();
    alert("Form Submitted");
  }

  return (
    <form>
      <input type="text" placeholder="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;