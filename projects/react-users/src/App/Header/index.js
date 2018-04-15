import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Header(props) {
  return <header>
      <h1 style={{ fontSize: "40px" }} className="title">
        happy campers
      </h1>
      <nav className="link-wrapper">
        <Link to="/">
          <Icon name="home" style={{ color: "white", textDecoration: "none" }} />
        </Link>
        <Link to="/about">
          <Icon name="help circle" style={{ color: "white", textDecoration: "none" }} />
        </Link>
        <Link to="/contact">
          <Icon name="talk" style={{color: "white", textDecoration: "none"}} />
        </Link>
      </nav>
    </header>;
}

export default Header;
