import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserList from "./UserList/";
import "./styles.css";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
       <div className="link-wrapper">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about/" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
       </div>
       <div className="body-wrapper">
         <UserList></UserList>
       </div>
      <Footer />
    </div>
  )
}

export default App;