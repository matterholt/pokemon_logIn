import React, { useState } from "react";
import ReactDOM from "react-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "../inputs.css";
const inputStyle = css``;

const LogInput = ({ signInReturn }) => {
  const [check, updateCheck] = useState(false);

  function handleChange(e) {
    // how to toggle the state
    const target = e.target.value;
    const value = target.type === "checkbox" ? target.checked : target.value;
    updateCheck(value);
  }

  return (
    <>
      <h2> Get ready for battle </h2>
      <label>
        User Name:
        <input type="email" name="userEmail" />
      </label>
      <label>
        Password:
        <input
          type={check ? "type" : "password"}
          name="userPass"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number 
        and one uppercase and lowercase letter, 
        and at least 8 or more characters"
        />
      </label>
      <label>
        <input
          type="checkbox"
          name="showPassword"
          checked={check}
          onChange={handleChange}
        />
        Show Password
      </label>

      <button> GO! </button>
      <button onClick={signInReturn}> New User </button>
    </>
  );
};

export { LogInput };
