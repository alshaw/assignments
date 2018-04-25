import React from "react"
import Form from "./Form"
import Header from "./Header";
import IssuesList from "./IssuesList";
import "./styles.css";

function App(props) {
  return (
    <div>
      <Header />
      <Form />
      <IssuesList />
    </div>
  )
}

export default App;