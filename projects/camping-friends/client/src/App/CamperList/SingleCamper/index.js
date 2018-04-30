import React from "react";
import { Card, Image, Popup, Icon } from "semantic-ui-react";
// import QuoteList from "../../QuoteList";

// const style = {
//   borderRadius: "5px",
//   opacity: 0.9,
//   padding: "2em"
// };

function SingleCamper({ camper, saveCamper }) {
  const handleOnClick = () => {
    saveCamper(camper);
  };

  const trigger = (
    <Card>
      <Card.Content>
        {/* <Image
          style={{ border: "1px solid darkgray" }}
          src={user.picture.large}
        /> */}
        <Card.Header>
          {camper.name} {camper.spot}
        </Card.Header>
        <Card.Description></Card.Description>

      </Card.Content>
      <Card.Content extra>
        <Icon
          link="true"
          name="heart"
          size="large"
          color="red"
          onClick={handleOnClick}
        />
        <Icon
          link="true"
          name="remove"
          size="large"
          color="black"
          floated="right"
          onClick={handleOnClick}
        />
      </Card.Content>
    </Card>
  );

  // return (
  //   <Popup style={style} inverted trigger={trigger} content={<QuoteList />} />
  // );
}

export default SingleCamper;
