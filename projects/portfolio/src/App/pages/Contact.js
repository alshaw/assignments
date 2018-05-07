import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Contact(props) {
  return <div className="contact-links">
      <a href="https://github.com/alshaw" target="_blank">
        <Icon name="github" size="huge"></Icon>
      </a>
      <a href="https://www.linkedin.com/in/hello-allison-shaw/" target="_blank">
        <Icon name="linkedin" size="huge"></Icon>
      </a>
    </div>;
}

export default Contact;