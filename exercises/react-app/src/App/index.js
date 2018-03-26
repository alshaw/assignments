import React from "react";
import Feature from "./Feature/";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar></Navbar>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App;