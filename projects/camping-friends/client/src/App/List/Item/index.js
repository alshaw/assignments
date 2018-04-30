import React from "react";
import EditForm from "./EditForm";

function Item(props) {
  const { name, spot, removeCamper, index } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{spot}</p>
      <button onClick={() => removeCamper(index)}>Delete</button>
      <EditForm index={index} name={name} spot={spot}></EditForm>
    </div>
  )
}
export default Item;