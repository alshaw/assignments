import React from "react";

function Pet(props) {
  return (
    <li>
      <h2>{props.pet.name}</h2>
      <p>{props.pet.breed}</p>
    </li>
  );
}

export default Pet;
