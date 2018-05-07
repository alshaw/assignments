import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function NavBar(props) {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <Icon size="large" name="home"></Icon>
      </Link>
      <Link className="nav-link" to="/contact">
        <Icon size="large" name="info circle"></Icon>
      </Link>
    </nav>
  );
}

export default NavBar;
