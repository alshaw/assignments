import React from "react";

function Blog(props) {
  console.log(props);
  const { title, content, backgroundColor } = props;
  const style = {
    backgroundColor
  }
  return (
    <div style={style}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Blog;