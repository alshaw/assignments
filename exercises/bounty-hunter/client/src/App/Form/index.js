import React, { Component } from "react";
import { connect } from "react-redux";
import { addBounty } from "../../redux/bounties";

class Form extends Component {
  constructor(props) {
    super(props);
    this.intialState = {
      input: {
        firstName: "",
        lastName: "",
        isLiving: "",
        bountyAmount: "",
        type: "",
      },
      // bounties: []
    }
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target; 
    this.setState(prevState => {
      return {
        input: {
          ...prevState.input,
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
    const { firstName, lastName, isLiving, bountyAmount, type } = this.intialState.inputs;
    return <form onSubmit={this.handleSubmit} className="form-wrapper">
      <input onChange={this.handleChange} name="firstName" placeholder="First Name" value={firstName} type="text"/>
      <input onChange={this.handleChange} name="lastName" placeholder="Last Name" value={lastName} type="text"/>
      <input onChange={this.handleChange} name="isLiving" placeholder="Still Living?" value={isLiving} type="text"/>
      <input onChange={this.handleChange} name="bountyAmount" placeholder="Bounty Amount" value={bountyAmount} type="text"/>
      <input onChange={this.handleChange} name="type" placeholder="Sith or Jedi?" value={type} type="text"/>
      <button className="form-submit">Submit</button>
      </form>
  }
}

export default connect(null, { addBounty }) (Form);