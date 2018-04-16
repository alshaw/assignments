import React from "react";
import { Card, Image, Popup, Button } from "semantic-ui-react";
import QuoteList from "../../QuoteList";

const style = {
  borderRadius: "5px",
  opacity: 0.9,
  padding: "2em",
};


function SingleUser({ user, saveUser }) {
  const handleOnClick = () => {
    saveUser(user)
  }

  const trigger = <Card>
      <Card.Content className="single-user">
        <Image style={{ border: "1px solid darkgray" }} src={user.picture.large} />
        <Card.Header>
          {user.name.first} {user.name.last}
        </Card.Header>
        <Card.Description style={{ color: "purple", display: "flex", flexWrap: "wrap" }}>
          {user.location.state}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={handleOnClick} />
      </Card.Content>
    </Card>;
   
  return (
    <Popup style={style} inverted trigger={trigger} content={<QuoteList />} />
  )
}


export default SingleUser;