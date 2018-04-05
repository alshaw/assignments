import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import PeanutButter from "./pages/PeanutButter";
import Jelly from "./pages/Jelly";
import DataContainer from "./DataContainer";


function App(props) {
  return <div className="app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Switch>
          <DataContainer>
            <Route exact path="/about" component={About} />
            <Route exact path="/peanut-butter" component={PeanutButter} />
            <Route exact path="/jelly" component={Jelly} />
          </DataContainer>
        </Switch>
      </div>
      <Footer />
    </div>;
}

export default App;