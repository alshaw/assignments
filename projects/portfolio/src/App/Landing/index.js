import React from "react";
import logo from "../assets/as.logo.svg";
import { Icon } from "semantic-ui-react";

function Landing(props) {
  return (
    <div className="landing">
      <div className="full-name">
        {/* <div className="as-logo">
          <img className="logo" src={logo} alt="logo" />
        </div> */}
        <div>
          <div>
            <p className="name">ALLISON</p>
          </div>
          <div>
            <p className="name">SHAW</p>
          </div>
        </div>
        <div className="as-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
