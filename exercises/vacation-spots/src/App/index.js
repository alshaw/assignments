import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
// import "./index.css";

function App(props) {

  return (
    <div className="app-wrapper">
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default App;