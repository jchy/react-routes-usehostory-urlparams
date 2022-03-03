import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const { handleSignIn, isAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn({ username, password });
  };
  return !isAuth ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  ) : (
    <div>
      <Redirect to="/users" />
    </div>
  );
};

export { Login };
