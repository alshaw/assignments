import React from "react";

const style = {
  borderRadius: 0,
  // opacity: 1.9,
  padding: "2em",
  backgroundColor: "black",
  color: "white"
};

function SingleQuote(props) {
  const { quote } = props;
  return (
    <div style={style}>
      <p>{quote}</p>
    </div>
  );
}
export default SingleQuote;
