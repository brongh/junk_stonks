import React, { useState } from "react";
import { loginUser } from "../Context";

import { useAuthState, useAuthDispatch } from "../Context/context";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let response = await loginUser(dispatch, { email, password });
      if (!response.email) {
        return history.push("/");
        // conditionals for which dashboard to go
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pageContainer">
      <div>
        <h1>Login Page</h1>
      </div>
      {errorMessage ? <p className="error">{[errorMessage]}</p> : null}
      <div className="formContainer">
        <form>
          <div className="loginForm">
            <div className="loginFormItem">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="loginFormItem">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <button onClick={handleLogin} disabled={loading}>
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
