import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handleClick = () => {
    text === "Random Title" ? setText("Hello World!") : setText("Random Title");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
