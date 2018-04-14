import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1 style={{fontSize: "40px"}}className="title">happy campers</h1>
      <nav className="link-wrapper">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
