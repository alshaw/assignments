import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../../../redux/comments";

class Comment extends Component() {
  constructor(props) {
    super(props)
    const { comment } = props;
    this.state = { 
      inputs: {
        comment: comment || ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
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
    const { _id, addComment, clear, add } = this.props;
  }
}

export default Comment;