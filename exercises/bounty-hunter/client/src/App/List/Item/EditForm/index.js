import React, { Component } from "react";
import { connect } from "react-redux";
import { editBounty } from "../../../../redux/bounties.js";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        firstName: props.firstName,
        lastName: props.lastName,
        isLiving: props.isLiving,
        bountyAmount: props.bountyAmount,
        type: props.type,
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      };
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { index, editPost } = this.props;
    editPost(index, this.state.inputs);
  }

  render() {
    const { firstName, lastName, isLiving, bountyAmount, type } = this.state.inputs;
    return (
      <form onSubmit={this.handleSubmit} className="edit-form">
        <input
          onChange={this.handleChange}
          name="firstName"
          value={firstName}
          type="text"
          placeholder="Edit First Name"
        />
        <input
          onChange={this.handleChange}
          name="lastName"
          value={lastName}
          placeholder="Edit Last Name"
        />
        <input
          onChange={this.handleChange}
          name="isLiving"
          value={isLiving}
          placeholder="Edit Is Alive?"
        />
        <input
          onChange={this.handleChange}
          name="bountyAmount"
          value={bountyAmount}
          placeholder="Edit Bounty Amount."
        />
        <input
          onChange={this.handleChange}
          name="type"
          value={type}
          placeholder="Edit type."
        />
        <button>Edit Post</button>
      </form>
    );
  }
}

export default connect(null, { editBounty })(EditForm);
