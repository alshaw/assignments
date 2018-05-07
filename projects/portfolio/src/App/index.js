import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Landing from "./Landing";
import Projects from "./Projects";
import "./styles.css";

function App(props) {
  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Landing />
    <Projects />
    </div>
}

export default App;