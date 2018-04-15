import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Header(props) {
  return <header>
      <h1 style={{ fontSize: "40px" }} className="title">
        happy campers
      </h1>
      <nav className="link-wrapper">
        <Link to="/" className="nav-link">
          <Icon name="home" className="nav-icon" />
        </Link>
        <Link to="/about" className="nav-link">
          <Icon name="help circle" className="nav-icon" />
        </Link>
        <Link to="/contact" className="nav-link">
          <Icon name="talk" className="nav-icon" />
        </Link>
      </nav>
    </header>;
}

export default Header;
