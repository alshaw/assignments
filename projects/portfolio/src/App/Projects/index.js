import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import list from "../assets/camping-list.png";

function Projects(props) {
  return <div>
      <Link to="https://camping-list.herokuapp.com/">
        <img className="grid" src={list} alt="list" />
      </Link>
      <Link to="https://camping-list.herokuapp.com/">
        <img className="grid" src={list} alt="list" />
      </Link>
    </div>;
}

export default Projects;
