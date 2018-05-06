import React, { Component } from "react";
import FormDisplay from "./FormDisplay";
import { connect } from "react-redux";
import { addIssue } from "../../redux/issues";


class Form extends Component {
  constructor(props) {
    super(props)
    this.initialState = {
      inputs: {
        title: "",
        description: ""
      },
      issues: []
    }
    this.state = this.initialState;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addIssue(this.state.inputs)
    this.setState(this.initialState)
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

export default connect(null, { addIssue })(Form);