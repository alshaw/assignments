import React from "react";
import list from "../assets/camping-list.png";
import rallyest from "../assets/rallyest2.png";
import reactUsers from "../assets/react-users.png";

function Projects(props) {
  return <div className="projects-div">
      <a href="https://camping-list.herokuapp.com/" target="_blank">
        <img className="project" src={reactUsers} alt="react users app" />
      </a>
      <a href="https://camping-list.herokuapp.com/" target="_blank">
        <img className="project" src={list} alt="Camping list" />
      </a>
      <a href="https://github.com/alshaw/rallyest-frontend" target="_blank">
        <img className="project" src={rallyest} alt="Rallyest app" />
      </a>
    </div>;
}

export default Projects;
