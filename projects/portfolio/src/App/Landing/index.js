import React from "react";
import logo from "../assets/as.logo.svg";

function Landing(props) {
  return <div className="full-name">
      <div className="first-name">
        <h1>ALLISON</h1>
      </div>
      <div className="last-name">
        <h1>
          SHAW <img src={logo} className="as-logo" alt="logo" />
        </h1>
      </div>
    </div>;
}

export default Landing;