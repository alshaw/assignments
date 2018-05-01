import React from "react";
import Header from "./Header";
import List from "./List";
// import EditForm from "EditForm";
import Form from "./Form";
import "./styles.css";

function App(props) {
  return (
    <div>
      <Header />
      <Form />
      <List />      
    </div>
  );
}

export default App;
