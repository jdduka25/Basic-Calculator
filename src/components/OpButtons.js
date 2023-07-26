import React from "react";

const Clear = (props) => {
  return (
    <button className="highlight" onClick={props.clear} id="clear">
      Clear
    </button>
  );
};

const BackSpace = (props) => {
  return (
    <button className="highlight" onClick={props.backspace} id="backspace">
      C
    </button>
  );
};

const Calculate = (props) => {
  return (
    <button className="highlight" onClick={props.calculate} id="result">
      =
    </button>
  );
};

export default Clear;
export { BackSpace, Calculate };
