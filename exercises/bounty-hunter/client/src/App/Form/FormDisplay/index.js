import React from "react";
import List from "../List";

function FormDisplay(props) {
  const { handleChange, handleSubmit, inputs, bounties } = props;
  const { firstName, lastName, isLiving, bountyAmount, type } = inputs;
  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={handleChange} value={firstName} type="text" placeholder="Enter First Name" />
      <input name="lastName" onChange={handleChange} value={lastName} type="text" placeholder="Enter Last Name" />
      <input name="isLiving" onChange={handleChange} value={isLiving} type="text" placeholder="Living?" />
      <input name="bountyAmount" onChange={handleChange} value={bountyAmount} type="text" placeholder="Bounty Amount" />
      <input name="type" onChange={handleChange} value={type} type="text" placeholder="Sith or Jedi?" />
      <button>Submit</button>
      <List bounties={bounties}></List>
    </form>
  )
}

export default FormDisplay;

