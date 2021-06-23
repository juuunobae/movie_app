import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to={(location) => ({ ...location, pathname: "/about" })}>About</Link>
    </div>
  );
}

export default Navigation;
