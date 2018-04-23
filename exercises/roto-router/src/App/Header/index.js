import React from "react";
import { Link } from "react-router-dom";


function Header(props) {
  return (
    <header>
      <h1>Roto Router</h1>
      <nav className="link-wrapper">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  )
}

export default Header;