import React from "react";
import Form from "./Form";
import List from "./List";
import Header from "./Header";
import "../styles.css"

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Form />
      <List />
    </div>
  )
}

export default App;
