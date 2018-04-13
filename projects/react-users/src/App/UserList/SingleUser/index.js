import React from "react";
import { Card, Image, Popup } from "semantic-ui-react";

const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: "2em"
};


function SingleUser(props) {
  console.log(props);
  const { name, picture, login } = props; 
  const trigger = (
     <Card>
      <Card.Content className="single-user">
        <Image style={{ border: "1px solid darkgray" }} src={picture.large} />
        <Card.Header>
          {name.first} {name.last}
        </Card.Header>
        <Card.Description style={{ color: "purple" }}>
          {login.username}
        </Card.Description>
      </Card.Content>
    </Card>
  )
   
  return (
    <Popup trigger={trigger} content={"a quote"} />
  )
}


export default SingleUser;