import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";

function Header(props) {
  return <header>
      <h1 style={{ fontSize: "40px" }} className="title">
        react users
      </h1>
      <nav className="link-wrapper">
        <Link to="/contact" className="nav-link">
          <Icon name="chat" className="nav-icon" size="large" />
        </Link>
        <Link to="/" className="nav-link">
          <Icon name="home" className="nav-icon" size="large" />
        </Link>
        <Link to="/about" className="nav-link">
          <Icon name="help circle" className="nav-icon" size="large" />
        </Link>
      </nav>
    </header>;
}
const mapStateToProps = state => {
  return {
    savedUsers: state.users.savedUsers
  };
};

export default connect(mapStateToProps)(Header);
