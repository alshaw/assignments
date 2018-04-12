import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="About"
          active={activeItem === "About"}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>

        <Menu.Item
          name="Contact"
          active={activeItem === "Contact"}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
    );
  }
}

