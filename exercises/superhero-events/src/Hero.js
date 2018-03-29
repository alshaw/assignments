import React from "react";

function Hero(props) {
  return (
    <div>
      <h2 onClick={(e) => props.handleClick(props.hero)}
          style={{fontSize: "50px"}}
      >
      {props.hero.name}
      </h2>
      <img onClick={(e) =>
        props.handleClick(props.hero)}
        style={{maxWidth: "300px"}}
        src={require(`./images/${props.hero.filename}`)} alt={props.hero.name}
      />
    </div>
  )
}

export default Hero;