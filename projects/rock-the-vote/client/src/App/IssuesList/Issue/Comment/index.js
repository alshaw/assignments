import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../../../redux/comments";

class Comment extends Component {
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
    if (add) {
      addComment(this.state.inputs)
    } else if (clear) {
      this.clearInputs();
    }
  }

  clearInputs() {
    this.setState({
      inputs: {
        title: "",
        description: ""
      }
    })
  }

  render() {
    const { comment } = this.state.inputs;
    return (
      <form className="edit-form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          name="comment"
          value={comment}
          type="text"
          placeholder="Comment"
        />
        <button>Submit</button>
        <button>Cancel</button>
      </form>
    )
  }
}

export default connect(null, { addComment })(Comment);