import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1 className="title">random users</h1>
      <nav className="link-wrapper">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
