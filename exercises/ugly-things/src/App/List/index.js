import React from "react";
import { connect } from "react-redux";
import { removePost } from "../../redux/posts";
import Item from "./Item/";
// import { addPost } from "../../redux/posts.js";

function List(props) {
  console.log(props);
  const postComponents = props.data.map((post, i) => 
    <Item key={post.imgUrl + i}{...post} 
          removePost={props.removePost} 
          index={i}>
    </Item>)
  return (
    <div className="post-list">
      { postComponents }
    </div>
  )
}

const mapStateToProps = state => {
  return state.posts;
}

export default connect(mapStateToProps, { removePost })(List);
