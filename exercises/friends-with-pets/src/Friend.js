import React from "react";
import Pet from "./Pet";

function Friend(props, i) {
  return (
    <div key={props.human.name + i}>
      <h1>{props.human.name}</h1>
      <h3>{props.human.age}</h3>
      <ul>
        {props.human.pets.map((animal, i) => (
          <Pet key={animal.name + i} pet={animal} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default Friend;
