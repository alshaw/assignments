import React from "react";
import "../../styles.css"

function PlanetItem (props) {
  const { name, diameter, climate } = props;
  return (
    <div className="planet-list">
      <h1>{name}</h1>
      <p>Diameter: {diameter}</p>
      <p>Climate: {climate}</p>
    </div>
  )
}

export default PlanetItem;