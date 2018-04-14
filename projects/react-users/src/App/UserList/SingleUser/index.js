import React from "react";
import { Card, Image, Popup, Icon, Button } from "semantic-ui-react";
// import SingleQuote from "./SingleQuote";
import QuoteList from "../../QuoteList";

const style = {
  borderRadius: 0,
  // opacity: 0.7,
  padding: "2em"
};


function SingleUser(props) {
  // console.log(props);
  const { name, picture, login } = props; 
  const trigger = <Card>
      <Card.Content className="single-user">
        <Image style={{ border: "1px solid darkgray" }} src={picture.large} />
        <Card.Header>
          {name.first} {name.last}
        </Card.Header>
        <Card.Description
          style={{ color: "purple", display: "flex", flexWrap: "wrap" }}
        >
          {login.username}
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <div className="ui-buttons">
          <Icon floated="left" name="heart" color="red" size="large" circular />
          <Button basic color="red">
            Add
          </Button>
        </div>
      </Card.Content> */}
    </Card>;
   
  return (
    <Popup style={style} inverted trigger={trigger} content={<QuoteList />} />
  )
}


export default SingleUser;