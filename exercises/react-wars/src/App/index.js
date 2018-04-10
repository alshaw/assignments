import React from "react";
import Header from "./Header";
import PeopleList from "./PeopleList";
import "./styles.css";

function App(props) {
  return (
    <div>
      <Header />
      <PeopleList />
    </div>
  )
}

export default App;