import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
      <Link className="link" to="/projects">
        Projects
      </Link>
    </nav>
  );
}

export default NavBar;
