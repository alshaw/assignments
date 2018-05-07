import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Landing from "./Landing";
import "./styles.css";

function App(props) {
  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About}/>
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Landing />
    </div>
}

export default App;