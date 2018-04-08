import React from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/posts.js";

function UglyThing(props) {
  let { imgUrl, title, description } = props;
  return (
    <div className="app-wrapper">
      <h2 className="title">{ title }</h2>
      <p className="description">{ description }</p>
      <img className="image" src={ imgUrl } alt=""/>
    </div>
  );
}

export default connect(null, { addPost })(UglyThing);
