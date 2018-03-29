import React, { Component } from "react";
// import "./index.css";

function Cards(props) {
  let { place, price, timeToGo } = props;
  let color;
  let backgroundColor;
  let dollarSigns;
  switch (timeToGo) {
    case "Summer":
      backgroundColor = "rosybrown";
      break;
    case "Fall":
      backgroundColor = "maroon";
      break;
    case "Winter":
      backgroundColor = "lightyellow";
      break;
    case "Spring":
      backgroundColor = "lightgreen";
      break;
  }
  if (price < 500) {
    dollarSigns = '$';
  } else if (price < 1000) {
    dollarSigns = '$$';
  } else if (price > 1000) {
    dollarSigns = '$$$';
  }

  let style = { backgroundColor: backgroundColor, color: color }
  return (
    <div className="cards" style={style}>
      <h2>{place} | {dollarSigns}</h2>
      <h3>Best time to go: {timeToGo}</h3>
      <h4>{price}</h4>
    </div>
  )
}

export default Cards;
