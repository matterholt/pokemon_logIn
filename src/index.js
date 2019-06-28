import React, { useState } from "react";
import ReactDOM from "react-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./styles.css";

import Login from "./components/LoginButton";
import { NewUser } from "./components/NewUser";
import { LogInput } from "./components/PrevUser";

const LoginLogic = () => {
  const [newUser, setNewUser] = useState(false);
  const [signIn, setSignIn] = useState(true);
  // useReducer to help clean all this up
  function signInNew() {
    setNewUser(true);
    setSignIn(false);
  }
  function signInPrev() {
    setSignIn(true);
    setNewUser(false);
  }
  function signInReturn() {
    setNewUser(false);
    setSignIn(false);
  }

  if (signIn === true) {
    return <LogInput signInReturn={signInReturn} />;
  } else if (newUser === true) {
    return <NewUser signInReturn={signInReturn} />;
  } else {
    return <Login newSign={signInNew} prevSign={signInPrev} />;
  }
};

function App() {
  return (
    <div className="login">
      <div className="login top" />
      <div className="login band">
        <div className="center">
          <div className="login ">
            <LoginLogic />
          </div>
        </div>
      </div>
      <div className="login bottom" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
