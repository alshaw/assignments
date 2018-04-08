import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../../redux/posts.js";

class Form extends Component {
  constructor(props) {
    super(props);
    let { imgUrl, title, description } = props;
    this.state = {
      inputs: {
        imgUrl: imgUrl || "",
        title: title || "",
        description: description || ""
      }
    };
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
    let { addPost } = this.props;
    addPost(this.state.inputs);
    this.clearInputs();
  }

  clearInputs() {
    this.setState({
      inputs: {
        imgUrl: "",
        title: "",
        description: ""
      }
    });
  }

  render() {
    let { imgUrl, title, description } = this.state.inputs;
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <input
          className="input"
          placeholder="Upload image "
          name="imgUrl"
          value={imgUrl}
          onChange={this.handleChange}
          type="text"
        />
        <input
          className="input"
          placeholder="Title"
          name="title"
          value={title}
          onChange={this.handleChange}
          type="text"
        />
        <input
          className="input"
          placeholder="Description"
          name="description"
          value={description}
          onChange={this.handleChange}
          type="text"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(null, { addPost })(Form);