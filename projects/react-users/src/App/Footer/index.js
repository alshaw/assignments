import React from "react";
import { Icon } from "semantic-ui-react";
import "../styles.css";

function Footer(props) {
  return <footer>
      {/* <p>&copy; 2018</p> */}
      <Icon name="heart" size="large" />
      <Icon name="tree" size="large" />
    </footer>;
}

export default Footer;
