import React from "react";
import Form from "./Form";
import List from "./List";
import Header from "./Header";
import "./styles.css";

function App(props) {
  return (
    <div>
      <Header></Header>
      <Form></Form>
      <List></List>
    </div>
  )
}

export default App;