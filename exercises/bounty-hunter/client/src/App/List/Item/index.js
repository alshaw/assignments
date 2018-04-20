import React from "react";
import EditForm from "./EditForm/";

function Item(props) {
  const { firstName, lastName, isLiving, bountyAmount, type, removeBounty, index } = props;
  return (
    <div className="item-wrapper">
      <p>{firstName}</p>
      <button onClick={() => removeBounty(index)}>Delete</button>
      <EditForm
        index={index}
        lastName={lastName}
        isLiving={isLiving}
        bountyAmount={bountyAmount}
        type={type}
      />
    </div>
  );
}

export default Item;
