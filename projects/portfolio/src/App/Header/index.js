import React from "react";
import { Icon } from "semantic-ui-react";

function Header(props) {
  return (
    <div className="header">
          <div className="contact-links">
        <a href="https://github.com/alshaw" target="_blank">
          <Icon color="black" name="github" size="huge" />
        </a>
        <a href="https://www.linkedin.com/in/hello-allison-shaw/" target="_blank">
          <Icon color="black" name="linkedin" size="huge" />
        </a>
        </div>
    </div>
  );
}

export default Header;
