import React from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import "./styles.css";

function App(props) {
  return (
    <div>
      <Header />
      <Form />
      <List/>
    </div>
  );
}

export default App;
