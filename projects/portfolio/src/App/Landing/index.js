import React from "react";
import logo from "../assets/as.logo.svg";

function Landing(props) {
  return <div>
      <div className="full-name">
        <div className="first-name">ALLISON</div>
        <div className="last-name">SHAW</div>
        <div className="as-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>;
}

export default Landing;