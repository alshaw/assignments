import React from "react";
import Header from "./Header";
import Landing from "./Landing";
import Projects from "./Projects";
import Logo from "./Logo";
import Footer from "./Footer";
import "./styles.css";

function App(props) {
  return <div className="app-wrapper">
      <Header />
      <Landing />
      {/* <Logo /> */}
      <Projects />
      <Footer />
    </div>;
}

export default App;