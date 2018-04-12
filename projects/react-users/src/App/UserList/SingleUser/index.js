import React from "react";

function SingleUser(props) {
  console.log(props);
  const { name, picture, login } = props;
  return (
        <div className="user-wrapper">
          <img className="user-image" src={picture.large} alt="User" />
          <h2>
            {name.first} {name.last}
          </h2>
          <h3>{login.username}</h3>
        </div>
  )
}

export default SingleUser;