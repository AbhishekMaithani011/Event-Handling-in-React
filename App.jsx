import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handlingClick() {
    setHeadingText("Submitted");
  }

  function handlingMouseOver() {
    setMouseOver(true);
  }

  function handlingMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handlingClick}
        onMouseOver={handlingMouseOver}
        onMouseOut={handlingMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
