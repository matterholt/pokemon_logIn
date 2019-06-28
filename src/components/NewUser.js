import React, { useState } from "react";
import ReactDOM from "react-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const NewUser = ({ signInReturn }) => {
  return (
    <div>
      <h1> for New trainers </h1>
      <button onClick={signInReturn}> return </button>
    </div>
  );
};

export { NewUser };
