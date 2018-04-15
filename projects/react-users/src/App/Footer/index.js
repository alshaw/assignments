import React from "react";
import { Icon } from "semantic-ui-react";
import "../styles.css";

function Footer(props) {
  return <footer>
      {/* <p>&copy; 2018</p> */}
      <Icon name="heart" color="white" size="large" />
      <Icon name="tree" color="white" size="large" />
    </footer>;
}

export default Footer;
