import React, { Component } from 'react'
import { connect } from "react-redux"
import { addIssue, editIssue } from "../../redux/issues"


class Form extends Component {
  constructor(props) {
    super(props)
    let { title, description } = props
    this.state = {
      inputs: {
        title: title || "",
        description: description || ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearInputs = this.clearInputs.bind(this)
  }

  handleChange(event) {
    let { name, value } = event.target
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let { _id, addIssue, editIssue, clear, add  } = this.props
      if (add) {
        addIssue(this.state.inputs)
        } else {
          editIssue(this.state.inputs, _id)
        }
        if (clear) {
          this.clearInputs()
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
      let { title, description } = this.state.inputs
      return <div className="container">
           <h4>Political issue:</h4>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" name="title" value={title} placeholder="Title" />
            <textarea onChange={this.handleChange} type="text" name="description" value={description} placeholder="Description" />
            <div className="row">
            <button>Submit</button>
            </div>
          </form>
        </div>;
   }
}

export default connect(null, ({ addIssue, editIssue }))(Form)