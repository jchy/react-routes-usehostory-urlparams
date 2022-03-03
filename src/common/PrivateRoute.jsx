import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const PrivateRoute = ({
  redirectPath = "/login",
  push = false,
  path,
  children,
  exact = false
}) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  ) : (
    <Redirect push={push} to={redirectPath} />
  );
};

export { PrivateRoute };
