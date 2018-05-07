import React from "react";
import logo from "../assets/as.logo.svg"

function Logo(props) {
  return <div className="as-logo">
      <img className="logo" src={logo} alt="logo" />
    </div>;
} 

export default Logo;