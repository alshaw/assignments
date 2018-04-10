import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/posts.js";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      inputs: {
        imgUrl: "",
        caption: "",
        description: ""
      }
    }
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState(prevState => {
      return {
        inputs: {
          ...prevState.inputs,
          [name]: value
        }
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addPost(this.state.inputs);
    this.setState(this.initialState);
  }

  render() {
    const { imgUrl, caption, description } = this.state.inputs;
    return <form onSubmit={this.handleSubmit} className="form-wrapper">
        <input onChange={this.handleChange} name="imgUrl" placeholder="Upload image of ugly thing" value={imgUrl} type="text" />
        <input onChange={this.handleChange} name="caption" placeholder="caption" value={caption} type="text" />
        <input onChange={this.handleChange} name="description" placeholder="Describe this ugly thing" value={description} type="text" />
        <button>Submit</button>
      </form>
  }
}

export default connect(null, { addPost })(Form);