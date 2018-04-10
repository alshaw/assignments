import React from "react";
import Form from "./Form";
import List from "./List";
import Header from "./Header";
import "./styles.css"

function App(props) {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  )
}

// const mapStateToProps = state => {
//   return { posts: state.posts };
// };

export default App;
