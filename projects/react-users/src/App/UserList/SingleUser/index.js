import React from "react";

function SingleUser(props) {
  console.log(props);
  const { name, picture, login } = props;
  return (
    <div className="user-wrapper">
      <h2>{name.first} {name.last}</h2>
      <h3>Username: {login.username}</h3>
      <img src={picture.thumbnail} alt="User"></img>
    </div>
  )
}

export default SingleUser;