import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import "./styles.css";

function App(props) {

  return (
    <div className="wrapper">
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default App;