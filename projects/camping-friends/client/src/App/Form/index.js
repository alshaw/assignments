import React, { Component } from "react";
import { connect } from "react-redux";
import { addCamper } from "../../redux/campers.js";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      inputs: {
        name: "",
        spot: ""
      }
    }
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
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
    this.props.addCamper(this.state.inputs);
    this.setState(this.state.inputs);
    this.setState(this.initialState);
  }
  render() {
    const { name, spot } = this.state.inputs;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="name" value={name} type="text" placeholder="Name" />
        <input onChange={this.handleChange} name="spot" value={spot} type="text" placeholder="Favorite Camping Spot" />
      </form>
    )
  }
}

export default connect(null, {addCamper})(Form);
