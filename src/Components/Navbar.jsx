import React from "react";
import { Link } from "react-router-dom";

const Links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/about",
    title: "About"
  },
  {
    to: "/users",
    title: "Users"
  },
  {
    to: "/login",
    title: "Login"
  }
];
const Navbar = () => {
  return (
    <div>
      {Links.map(({ to, title }) => {
        return (
          <div>
            <Link to={to}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export { Navbar };
