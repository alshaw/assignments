import React, { Component } from "react";
import { connect } from "react-redux";
import { addBounty } from "../../redux/bounties";

import FormDisplay from "./FormDisplay";

class Form extends Component {
  constructor(props) {
    super(props);
    this.intialState = {
      inputs: {
        firstName: "",
        lastName: "",
        isLiving: "",
        bountyAmount: "",
        type: "",
      },
      bounties: []
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
    this.setState(prevState => {
      return {
        inputs: this.initialState.inputs,
        bounties: [...prevState.bounties, prevState.inputs]
      }
    })
    // this.props.addBounty(this.intialState.inputs);
    // this.setState(this.initialState);
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

export default connect(null, { addBounty }) (Form);