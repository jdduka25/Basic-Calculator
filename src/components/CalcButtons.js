import React, { Fragment } from "react";

const CalcButtons = (props) => {
  return (
    <Fragment>
      <button className="highlight" name="/" onClick={props.click}>
        &divide;
      </button>
      <button name="7" onClick={props.click}>
        7
      </button>
      <button name="8" onClick={props.click}>
        8
      </button>
      <button name="9" onClick={props.click}>
        9
      </button>
      <button className="highlight" name="*" onClick={props.click}>
        &times;
      </button>
      <button name="4" onClick={props.click}>
        4
      </button>
      <button name="5" onClick={props.click}>
        5
      </button>
      <button name="6" onClick={props.click}>
        6
      </button>
      <button className="highlight" name="-" onClick={props.click}>
        &ndash;
      </button>
      <button name="1" onClick={props.click}>
        1
      </button>
      <button name="2" onClick={props.click}>
        2
      </button>
      <button name="3" onClick={props.click}>
        3
      </button>
      <button className="highlight" name="+" onClick={props.click}>
        +
      </button>
      <button name="0" onClick={props.click}>
        0
      </button>
      <button name="." onClick={props.click}>
        .
      </button>
    </Fragment>
  );
};

export default CalcButtons;
