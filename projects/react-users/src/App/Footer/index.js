import React from "react";
import { Icon } from "semantic-ui-react";
import "../styles.css";

function Footer(props) {
  return <footer>
      {/* <p>&copy; 2018</p> */}
      <Icon name="home" color="black" size="large" />
      <Icon name="theme" color="grey" size="large" />
    </footer>;
}

export default Footer;
