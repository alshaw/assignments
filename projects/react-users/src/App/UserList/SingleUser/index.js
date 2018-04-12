import React from "react";
import { Card, Image } from "semantic-ui-react";

function SingleUser(props) {
  console.log(props);
  const { name, picture, login } = props;
  return <Card>
      <Card.Content className="single-user">
        {/* <img className="user-image" src={picture.large} alt="User" /> */}
        <Image style={{ border: "1px solid darkgray" }} src={picture.large} />
        <Card.Header>
          {name.first} {name.last}
        </Card.Header>
        <Card.Description style={{ color: "purple" }}>
          {login.username}
        </Card.Description>
      </Card.Content>
    </Card>;
}

export default SingleUser;