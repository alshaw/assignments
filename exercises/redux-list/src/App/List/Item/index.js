import React from "react";

function Item(props) {
  const {imgUrl, caption, removeCat, index } = props;
  return (
    <div>
      <img style={{height: "100px", width: "auto"}} src={imgUrl} alt=""/>
      <p>{caption}</p>
      <button onClick={() => removeCat(index)}
      >X</button>
    </div>
  )
}

export default Item;