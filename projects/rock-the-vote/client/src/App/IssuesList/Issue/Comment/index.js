import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment, editComment } from "../../../../redux/comments";

class Comment extends Component {
  constructor(props) {
    super(props)
    const { comment } = props;
    this.initialState = { 
      inputs: {
        comment: comment || ""
      }
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
    this.props.addComment({...this.state.inputs, issueId: this.props._id})
    this.setState(this.initialState);
    this.props.toggleComment();
  }

  clearInputs() {
    this.setState({
      inputs: {
        comment: ""
      }
    })
  }

  render() {
    const { comment } = this.state.inputs;
    const { _id } = this.props; 
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          name="comment"
          value={comment}
          type="text"
          placeholder="Comment"
        />
        <button onClick={() => addComment(_id)}>Submit</button>
        <button>Cancel</button>
      </form>
    )
  }
}

export default connect(null, { addComment })(Comment);