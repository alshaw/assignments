import React, { Component } from "react";
import List from "./List";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      inputs: {
        firstName: "",
        lastName: "",
        email: ""
      }, 
      people: []
    }
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //take the value from the input and set state accordingly
    const { value, name } = event.target;
    console.log(event.target.value);
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        inputs: {
        firstName: "",
        lastName: "",
        email: ""
      },
        people: [...prevState.people, prevState.inputs]
      }
    });
  }

  render() {
    console.log(this.state.inputs);
    const { firstName, lastName, email } = this.state.inputs;
    const { people } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="firstName" autoComplete="given-name" onChange={this.handleChange} value={ firstName } type="text" placeholder="First Name" />
        <input name="lastName" onChange={this.handleChange} value={ lastName } type="text" placeholder="Last Name" />
        <input name="email" onChange={this.handleChange} value={ email } type="email" placeholder="@Email" />
        <button>Submit</button>
        <List people={ people }></List>
      </form>
    )
  }
}

export default Form;