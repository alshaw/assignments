import React from "react";
import Blog from "./Blog/";

function App(){
  const blog1 = {
    title: "I'm a blog title",
    content: "I'm some content."
  }
  const blog2 = {
    title: "Just another boring blog",
    content: "With boring content."
  }
  const blog3 = {
    title: "Wow, another blog about the weather",
    content: "There has been weather outside lately."
  }

  return(
    <div>
      <Blog backgroundColor="lightgray" {...blog1}></Blog>
      <Blog backgroundColor="maroon" {...blog2}></Blog>
      <Blog backgroundColor="rosybrown" {...blog3}></Blog>
      <Blog backgroundColor="lightgray" {...blog1}></Blog>
      <Blog backgroundColor="maroon" {...blog2}></Blog>
      <Blog backgroundColor="rosybrown" {...blog3}></Blog>
    </div>
  )
}

export default App;