import React from "react";
import Header from "./Header";
import PlanetList from "./PlanetList";
import "./styles.css"

function App(props) {
  return (
    <div>
      <Header />
      <PlanetList />
    </div>
  )
}

export default App;