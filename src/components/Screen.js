import React, { Fragment } from "react";

const Screen = (props) => {
  return (
    <Fragment>
      <form>
        <input type="text" value={props.result}></input>
      </form>
    </Fragment>
  );
};

export default Screen;
