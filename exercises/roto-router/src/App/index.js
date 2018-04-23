import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles.css";


function App(props) {
  return (
    <div>
      <Header />
      <div className="link-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
        <Footer />
    </div>
  )
}

export default App;