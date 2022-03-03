import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Login } from "../pages/Login";
import { UserPage } from "../pages/UserPage";
import { Users } from "../pages/Users";
import { PrivateRoute } from "../common/PrivateRoute";

const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          {" "}
          <h3>Home Page</h3>{" "}
        </Route>

        <Route path="/about" exact>
          {" "}
          <h3>About Page</h3>{" "}
        </Route>
        <PrivateRoute path="/users" exact>
          {" "}
          <Users />
        </PrivateRoute>

        <PrivateRoute path="/users/:id" exact>
          {" "}
          <UserPage />
        </PrivateRoute>

        <Route path="/login" exact>
          {" "}
          <Login />
        </Route>

        <Route>
          <div>Page not found</div>
        </Route>
      </Switch>
    </>
  );
};

export { AllRoutes };
