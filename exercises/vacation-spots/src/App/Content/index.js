import React, { Component } from "react";
// import "./index.css";
import Cards from "./Cards";

function Content(props) {
  let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    }, {
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    }, {
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    }, {
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    }, {
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }

  ]
  return (
    <div className="card-wrapper">
      {vacationSpots.map((location) => {
        return <Cards {...location}></Cards>
      })}
    </div>
  )
}

export default Content;