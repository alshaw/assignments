import React from "react";
import EditForm from "./EditForm/";


function Item(props) {
  const { imgUrl, caption, description, removePost, index } = props;
  return (
    <div className="item-wrapper">
      <img style={{ height: "100px", width: "auto" }} src={ imgUrl } alt="" />
      <h3>{ caption }</h3>
      <p>{ description }</p>
      <button onClick={() => removePost(index)}>Delete</button>
      <EditForm index={ index } imgUrl={ imgUrl } caption={ caption } description={ description }/>
    </div>
  )
}

export default Item;