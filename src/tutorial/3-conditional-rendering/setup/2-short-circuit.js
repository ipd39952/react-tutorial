import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}

      {/* in case text is falsy/empty we render h1 tag with john doe as text: */}
      {/* otherwise the text will be rendered */}
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>

      {/* only if text is truthy/not empty, the h1 tag will be returned */}
      {/* otherwise it wouldn't render anything on the page */}
      {isError && <h1>Error</h1>}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
