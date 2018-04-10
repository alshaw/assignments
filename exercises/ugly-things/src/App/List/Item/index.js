import React from "react";
import EditForm from "./EditForm/";

function Item(props) {
  const { imgUrl, caption, description, removePost, index } = props;
  return (
    <div>
      <img style={{ height: "100px", width: "auto" }} src={ imgUrl } alt="" />
      <p>{ caption }</p>
      <p>{ description }</p>
      <button onClick={() => removePost(index)}>X</button>
      <EditForm index={ index } imgUrl={ imgUrl } caption={ caption } description={ description }/>
    </div>
  )
}

export default Item;