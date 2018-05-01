import React, { Component } from "react";
import FormDisplay from "./FormDisplay";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      inputs: {
        description: "",
        price: ""
      },
      items: []
    }
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value, name } = e.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        inputs: this.initialState.inputs,
        items: [...prevState.items, prevState.inputs]
      }
    })
  }
  render() {
    const props = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      ...this.state
    }
    return (
      <FormDisplay {...props}></FormDisplay>
    )
  }
}

export default Form;