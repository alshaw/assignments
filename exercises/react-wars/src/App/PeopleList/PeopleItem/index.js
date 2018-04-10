import React from "react";

function PeopleItem(props) {
  const { name, height, mass, hair_color, eye_color, birth_year, gender } = props;
  return (
    <div className="people-list">
      <h1>{name}</h1>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

export default PeopleItem;