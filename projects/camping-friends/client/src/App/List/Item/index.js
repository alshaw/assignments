import React from "react";
import EditForm from "./EditForm";
import { removeItem } from "../../../redux/items"

function Item(props) {
  const { description, price, removeItem, index }  = props;
  return (
    <div>
      <h3>{description}</h3>
      <p>{price}</p>
      <button onClick={() => removeItem(index)}>Delete</button>
      <EditForm 
        index={index}
        description={description}
        price={price}
      />
    </div>
  )
}

export default Item;

