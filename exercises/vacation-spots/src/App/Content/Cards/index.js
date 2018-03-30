import React from "react";
import "./styles.css";

function Cards(props) {
  let color;
  let backgroundColor;
  let { price, place, timeToGo } = props;
  let dollarSigns;

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
