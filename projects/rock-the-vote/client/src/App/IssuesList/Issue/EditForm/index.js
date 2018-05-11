import React, { Component } from "react";
import { connect } from "react-redux";
import { addIssue, editIssue } from "../../../../redux/issues";

class EditForm extends Component {
  constructor(props) {
    super(props) 
    const { title, description } = props
    this.state = {
      inputs: {
        title: title || "",
        description: description || ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
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
    e.persist();
    e.preventDefault();
    const { _id, addIssue, editIssue, clear, add, options } = this.props;
    if (add) {
      addIssue(this.state.inputs)
    } else {
      editIssue(this.state.inputs, _id)
      options.toggle();
    } 
    if (clear) {
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
    const { title, description } = this.state.inputs;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          name="title"
          value={title}
          type="text"
          placeholder="Title"
        />
        <input 
          onChange={this.handleChange}
          name="description"
          value={description}
          type="text"
          placeholder="Description"
        />
        <button className="submit">Save Changes</button>
      </form>
    )
  }
}

export default connect(null, { addIssue, editIssue }) (EditForm);