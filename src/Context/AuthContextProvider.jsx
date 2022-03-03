import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleSignIn = ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      setIsAuth(true);
    } else {
      alert("wrong credentials");
    }
  };
  const handleSignOut = () => {
    setIsAuth(false);
  };
  const value = { isAuth, handleSignIn, handleSignOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
